/* ECU-Perfect browser tools: sensor linearization (MAP, rail) and DTC off for Bosch EDC16 files.
   All processing happens locally in the browser, files are never uploaded. */
(function () {
  'use strict';

  // ---------- engine (works on Uint8Array) ----------
  function u16(b, i) { return (b[i] << 8) | b[i + 1]; }
  function w16(b, i, v) { b[i] = (v >> 8) & 255; b[i + 1] = v & 255; }
  function hex4(v) { return v.toString(16).toUpperCase().padStart(4, '0'); }
  function hasText(b, txt) {
    var n = txt.length, c = [], i, k;
    for (k = 0; k < n; k++) c.push(txt.charCodeAt(k));
    outer: for (i = 0; i + n <= b.length; i++) {
      if (b[i] !== c[0]) continue;
      for (k = 1; k < n; k++) if (b[i + k] !== c[k]) continue outer;
      return true;
    }
    return false;
  }
  function splitName(name) {
    var dot = name.lastIndexOf('.');
    return { base: dot > 0 ? name.slice(0, dot) : name, ext: dot > 0 ? name.slice(dot) : '' };
  }

  // EDC16: 4-point curve, big-endian 16-bit words: count(4), x[4] (ADC), y[4]
  // Sensor definition = words [x2, x3, y0, y1, y2, y3] (x0 = 0 and x1 = 102 are fixed)
  var CURVES = {
    rail: {
      sensors: { '1800': [921, 1023, 0, 0, 18000, 18000], '2700': [920, 1023, 0, 0, 27000, 27100] },
      labels: {
        '1800': ['czujnik 5V do 1800 bar', '5V sensor up to 1800 bar'],
        '2700': ['czujnik 5V do 2700 bar', '5V sensor up to 2700 bar']
      },
      suffix: function (t) { return '_RP_sensor_' + t + 'b'; },
      label: function (f, t) { return 'Adaptacja czujnika wysokiego ciśnienia paliwa: ' + f + ' → ' + t + ' bar'; }
    },
    map: {
      sensors: {
        '4438': [921, 1023, 63, 500, 4000, 4438],
        '3313': [921, 1023, 188, 500, 3000, 3313],
        '5000': [1023, 1024, 63, 500, 5000, 5000]
      },
      labels: {
        '4438': ['czujnik MAP do 4438 mbar (3,4 bar)', 'MAP sensor up to 4438 mbar (3.4 bar)'],
        '3313': ['czujnik MAP do 3313 mbar (2,3 bar)', 'MAP sensor up to 3313 mbar (2.3 bar)'],
        '5000': ['czujnik MAP do 5000 mbar (4 bar)', 'MAP sensor up to 5000 mbar (4 bar)']
      },
      suffix: function (t) { return '_MAP_sensor_' + t; },
      label: function (f, t) { return 'Adaptacja czujnika doładowania: ' + f + ' → ' + t + ' mbar'; }
    }
  };

  function curveFind(buf, kind) {
    var cfg = CURVES[kind], ids = Object.keys(cfg.sensors), hits = [], i, k, w, j, id;
    if (!hasText(buf, 'EDC16')) return null;
    for (i = 0; i + 18 <= buf.length; i += 2) {
      if (u16(buf, i) !== 4) continue;
      if (u16(buf, i + 2) !== 0 || u16(buf, i + 4) !== 102) continue;
      w = [];
      for (k = 0; k < 6; k++) w.push(u16(buf, i + 6 + 2 * k));
      for (j = 0; j < ids.length; j++) {
        id = ids[j];
        if (cfg.sensors[id].every(function (v, q) { return v === w[q]; })) hits.push({ offset: i, current: id });
      }
    }
    return hits.length === 1 ? hits[0] : null;
  }
  function curveAnalyze(buf, kind) {
    var hit = curveFind(buf, kind);
    if (!hit) return { found: false };
    return {
      found: true, current: hit.current,
      options: Object.keys(CURVES[kind].sensors).filter(function (k) { return k !== hit.current; }),
      offset: '0x' + hit.offset.toString(16).toUpperCase()
    };
  }
  function curveProcess(buf, kind, target, originalName) {
    var cfg = CURVES[kind], hit = curveFind(buf, kind);
    if (!hit) throw new Error('calibration_not_found');
    if (!cfg.sensors[target] || target === hit.current) throw new Error('invalid_target');
    var out = new Uint8Array(buf);
    cfg.sensors[target].forEach(function (v, k) { w16(out, hit.offset + 6 + 2 * k, v); });
    var check = curveFind(out, kind);
    if (!check || check.current !== target) throw new Error('verification_failed');
    var sn = splitName(originalName);
    return {
      data: out, name: sn.base + cfg.suffix(target) + sn.ext, label: cfg.label(hit.current, target),
      details: { from: hit.current, to: target, offset: '0x' + hit.offset.toString(16).toUpperCase() }
    };
  }

  // EDC16 DTC table: N rows of 4 big-endian 16-bit codes (usually consecutive), directly followed by N status bytes
  // (one per row). Status 0 = error disabled. The table is found by structure, not by address.
  var DTC_ON_DEFAULT = 0x06;
  function dtcQuadOk(buf, p) {
    if (p + 8 > buf.length) return false;
    var q = [u16(buf, p), u16(buf, p + 2), u16(buf, p + 4), u16(buf, p + 6)];
    var mn = Math.min.apply(null, q), mx = Math.max.apply(null, q);
    return mn >= 0x1000 && mx - mn <= 0x20 && (q[0] !== q[1] && q[0] !== q[2] && q[0] !== q[3] && q[1] !== q[2] && q[1] !== q[3] && q[2] !== q[3]);
  }
  function dtcFind(buf) {
    if (!hasText(buf, 'EDC16')) return null;
    var best = null, i, k, a, z, j, last, gap, ahead, t, n, small;
    for (i = 8; i + 8 <= buf.length; i += 2) {
      a = u16(buf, i);
      if (a < 0x1000 || u16(buf, i + 2) !== a + 1 || u16(buf, i + 4) !== a + 2 || u16(buf, i + 6) !== a + 3) continue;
      z = true;
      for (k = 1; k <= 8; k++) if (buf[i - k] !== 0) { z = false; break; }
      if (!z) continue;
      j = i; last = i; gap = 0;
      while (j + 8 <= buf.length) {
        if (dtcQuadOk(buf, j)) { j += 8; last = j; gap = 0; continue; }
        ahead = 0;
        for (t = 1; t <= 5; t++) if (dtcQuadOk(buf, j + 8 * t)) ahead++;
        if (gap < 4 && ahead >= 3) { gap++; j += 8; continue; }
        break;
      }
      n = (last - i) / 8;
      if (n < 40 || last + n > buf.length) continue;
      small = 0;
      for (k = 0; k < n; k++) if (buf[last + k] <= 0x20) small++;
      if (small / n < 0.98) continue;
      if (!best || n > best.n) best = { quad: i, n: n, status: last };
      i = last - 2;
    }
    return best;
  }
  function dtcAnalyze(buf) {
    var t = dtcFind(buf);
    if (!t) return { found: false };
    var rows = [], k, p;
    for (k = 0; k < t.n; k++) {
      p = t.quad + 8 * k;
      rows.push({ i: k, codes: [0, 2, 4, 6].map(function (o) { return hex4(u16(buf, p + o)); }), on: buf[t.status + k] !== 0 });
    }
    return { found: true, count: t.n, rows: rows };
  }
  function dtcProcess(buf, changes, originalName) {
    var t = dtcFind(buf);
    if (!t) throw new Error('calibration_not_found');
    var list = Array.isArray(changes) ? changes : [];
    if (!list.length || list.length > t.n) throw new Error('invalid_target');
    var out = new Uint8Array(buf), seen = {}, changed = [], offNames = [], onCount = 0, idx;
    for (idx = 0; idx < list.length; idx++) {
      var c = list[idx], k = c && c.i;
      if (!Number.isInteger(k) || k < 0 || k >= t.n || seen[k]) throw new Error('invalid_target');
      seen[k] = true;
      var code = hex4(u16(buf, t.quad + 8 * k));
      if (c.code !== code) throw new Error('invalid_target');
      var before = buf[t.status + k];
      if (c.to === 'off') {
        if (before === 0) throw new Error('invalid_target');
        out[t.status + k] = 0; offNames.push(code);
      } else if (c.to === 'on') {
        if (before !== 0) throw new Error('invalid_target');
        out[t.status + k] = DTC_ON_DEFAULT; onCount++;
      } else throw new Error('invalid_target');
      changed.push({ code: code, before: before, after: out[t.status + k] });
    }
    var chk = dtcFind(out);
    if (!chk || chk.quad !== t.quad || chk.n !== t.n || chk.status !== t.status) throw new Error('verification_failed');
    var diff = 0, x;
    for (x = 0; x < buf.length; x++) if (buf[x] !== out[x]) diff++;
    if (diff !== changed.filter(function (q) { return q.before !== q.after; }).length) throw new Error('verification_failed');
    var suffix = '';
    if (offNames.length) suffix += offNames.length <= 12 ? '_DTC_' + offNames.join('_') : '_DTC_off_' + offNames.length;
    var sn = splitName(originalName);
    return { data: out, name: sn.base + suffix + sn.ext, label: 'DTC: wyłączono ' + offNames.length + ', włączono ' + onCount, details: { off: offNames.length, on: onCount, changed: changed } };
  }

  var engine = { curveAnalyze: curveAnalyze, curveProcess: curveProcess, dtcAnalyze: dtcAnalyze, dtcProcess: dtcProcess, CURVES: CURVES, hasText: hasText };
  if (typeof window === 'undefined') { module.exports = engine; return; }

  // ---------- UI ----------
  var T = function (pl, en) { return window.I18N ? window.I18N.t(pl, en) : pl; };
  var MAX_BYTES = 16 * 1024 * 1024;

  var CSS = [
    ':root { --red:#e5202e; --red2:#ff4b57; --bg:#0b0b10; --card:#15151d; --line:#262633; --txt:#f2f2f6; --muted:#9a9aab; }',
    '* { box-sizing:border-box; }',
    'body { margin:0; font-family:"Segoe UI",system-ui,Arial,sans-serif; background:var(--bg); color:var(--txt); line-height:1.5; }',
    'a { color:inherit; }',
    'nav { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center; padding:12px 24px; background:rgba(11,11,16,.9); backdrop-filter:blur(8px); border-bottom:1px solid var(--line); }',
    '.logo { font-weight:800; letter-spacing:2px; text-decoration:none; } .logo b { color:inherit; }',
    'nav .links a { margin-left:20px; text-decoration:none; color:var(--muted); font-size:.95rem; } nav .links a:hover { color:var(--txt); }',
    'main { max-width:1000px; margin:0 auto; padding:20px 20px 40px; }',
    'h1 { margin:0 0 6px; font-size:clamp(1.6rem,4.5vw,2.4rem); }',
    'h1::after { content:""; display:block; width:56px; height:3px; background:var(--red); margin-top:10px; border-radius:2px; }',
    '.lead { color:var(--muted); margin:12px 0 16px; max-width:760px; }',
    '.card { background:var(--card); border:1px solid var(--line); border-radius:12px; padding:20px; margin-bottom:18px; }',
    '.card h2 { margin:0 0 14px; font-size:1.05rem; }',
    'label { display:block; font-size:.8rem; color:var(--muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px; }',
    'select, input[type=text] { width:100%; padding:10px 12px; border-radius:8px; border:1px solid var(--line); background:#0f0f16; color:var(--txt); font-size:1.05rem; font-family:inherit; }',
    'select:focus, input:focus { outline:2px solid var(--red); border-color:var(--red); }',
    'button { padding:11px 22px; border-radius:10px; border:2px solid var(--red); background:var(--red); color:#fff; font-weight:700; font-size:1rem; cursor:pointer; margin-top:14px; }',
    'button:hover { background:var(--red2); border-color:var(--red2); }',
    'button:disabled { opacity:.5; cursor:not-allowed; }',
    'button.ghost { background:transparent; border-color:var(--line); } button.ghost:hover { background:transparent; border-color:var(--red); }',
    'button.sm { padding:6px 12px; font-size:.85rem; margin-top:0; }',
    'input[type=file]::file-selector-button { background:var(--red); color:#fff; border:0; border-radius:6px; padding:8px 14px; margin-right:10px; font-weight:700; cursor:pointer; }',
    '.small { color:var(--muted); font-size:.82rem; margin-top:10px; }',
    '.msg { margin-top:10px; min-height:1.2em; } .msg.err { color:var(--red2); } .msg.ok { color:#5fd38d; }',
    '.notice { border-left:4px solid var(--red); background:#1c1218; padding:12px 14px; border-radius:6px; font-size:.9rem; margin-top:14px; }',
    '.hidden { display:none !important; }',
    '.chk { display:flex; gap:10px; align-items:flex-start; text-transform:none; letter-spacing:0; font-size:.9rem; color:var(--txt); margin-top:14px; cursor:pointer; }',
    '.chk input { margin-top:4px; width:auto; }',
    '.det { color:#5fd38d; margin:0 0 10px; }',
    '.dtcbar { display:flex; gap:8px; flex-wrap:wrap; align-items:center; margin-bottom:10px; }',
    '.dtcbar input[type=text] { width:240px; max-width:100%; } .dtcbar label { margin:0; display:flex; align-items:center; gap:6px; text-transform:none; letter-spacing:0; color:var(--txt); font-size:.9rem; }',
    '.dtcwrap { max-height:420px; overflow:auto; border:1px solid var(--line); border-radius:8px; }',
    '.dtcwrap table { width:100%; border-collapse:collapse; } .dtcwrap th, .dtcwrap td { padding:6px 10px; text-align:left; border-bottom:1px solid var(--line); }',
    '.dtcwrap th { position:sticky; top:0; background:#1a1a25; font-size:.75rem; text-transform:uppercase; letter-spacing:1px; color:var(--muted); }',
    '.dtcwrap td.code { font-family:Consolas,monospace; } .dtcwrap tr.chg { background:#2a1519; } .dtcwrap a.gq { text-decoration:none; color:var(--txt); } .dtcwrap a.gq:hover { color:var(--red2); text-decoration:underline; }',
    'footer { text-align:center; color:var(--muted); font-size:.85rem; padding:30px 20px; border-top:1px solid var(--line); }'
  ].join('\n');

  function el(tag, attrs, kids) {
    var e = document.createElement(tag), k;
    if (attrs) for (k in attrs) { if (k === 'text') e.textContent = attrs[k]; else if (k === 'cls') e.className = attrs[k]; else e.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }

  var PAGES = {
    map: {
      curve: 'map',
      title: ['Adaptacja czujnika doładowania (MAP)', 'Boost pressure (MAP) sensor adaptation'],
      lead: ['Zmiana linearyzacji czujnika ciśnienia doładowania (MAP) w pliku ze sterownika Bosch EDC16 samochodów BMW (diesel). Wgraj plik, narzędzie rozpozna obecny czujnik, a Ty wybierzesz docelowy.', 'Change the boost pressure (MAP) sensor linearization in a Bosch EDC16 ECU file from BMW cars (diesel). Load the file, the tool detects the current sensor and you choose the target one.'],
      none: ['Nie udało się odnaleźć kalibracji czujnika doładowania.', 'Could not find the boost pressure sensor calibration.'],
      cur: ['Obecny czujnik doładowania: ', 'Current boost pressure sensor: '],
      info: [
        ['Usługa polega na zmianie tzw. „linearyzacji” czujnika ciśnienia doładowania (boost). Nie zmienia zadanych wartości ciśnienia doładowania – jeżeli chcesz skorzystać z większego zakresu pomiaru, zachęcamy do kontaktu w celu wyceny usługi.', 'The tool changes the so-called "linearization" of the boost pressure sensor. It does not change the boost pressure setpoints – if you want to use a larger measuring range, please contact us for a quote.'],
        ['Uwaga: jeżeli Twoje auto pracuje obecnie z czujnikiem o większym zakresie niż adaptowany (np. 4300 → 3300 mbar) i wykorzystuje większy jego zakres, zmiana linearyzacji czujnika bez zmiany zadanego ciśnienia doładowania jest niedozwolona.', 'Warning: if your car currently runs with a sensor of a larger range than the one being adapted (e.g. 4300 → 3300 mbar) and uses a larger part of that range, changing the sensor linearization without changing the boost pressure setpoints is not allowed.']
      ],
      change: function (f, t) { return T('Zmiana: czujnik MAP do ' + f + ' mbar → czujnik MAP do ' + t + ' mbar', 'Change: MAP sensor up to ' + f + ' mbar → MAP sensor up to ' + t + ' mbar'); }
    },
    rail: {
      curve: 'rail',
      title: ['Adaptacja czujnika wysokiego ciśnienia paliwa (rail)', 'High-pressure fuel (rail) sensor adaptation'],
      lead: ['Zmiana linearyzacji czujnika wysokiego ciśnienia paliwa w pliku ze sterownika Bosch EDC16 samochodów BMW (diesel). Wgraj plik, narzędzie rozpozna obecny czujnik, a Ty wybierzesz docelowy.', 'Change the high-pressure fuel sensor linearization in a Bosch EDC16 ECU file from BMW cars (diesel). Load the file, the tool detects the current sensor and you choose the target one.'],
      none: ['Nie udało się odnaleźć kalibracji czujnika wysokiego ciśnienia paliwa.', 'Could not find the high-pressure fuel sensor calibration.'],
      cur: ['Obecny czujnik wysokiego ciśnienia paliwa: ', 'Current high-pressure fuel sensor: '],
      info: [
        ['Usługa polega na zmianie tzw. „linearyzacji” czujnika wysokiego ciśnienia paliwa. Nie zmienia zadanych wartości ciśnienia paliwa – jeżeli chcesz skorzystać z większego zakresu ciśnienia paliwa, zachęcamy do kontaktu w celu wyceny usługi.', 'The tool changes the so-called "linearization" of the high-pressure fuel sensor. It does not change the fuel pressure setpoints – if you want to use a higher fuel pressure range, please contact us for a quote.'],
        ['Uwaga: jeżeli Twoje auto pracuje obecnie z czujnikiem o większym zakresie niż adaptowany (np. 2700 → 1800 bar) i wykorzystuje większy jego zakres, zmiana linearyzacji czujnika bez zmiany zadanego ciśnienia paliwa jest niedozwolona.', 'Warning: if your car currently runs with a sensor of a larger range than the one being adapted (e.g. 2700 → 1800 bar) and uses a larger part of that range, changing the sensor linearization without changing the fuel pressure setpoints is not allowed.']
      ],
      change: function (f, t) { return T('Zmiana: czujnik 5V do ' + f + ' bar → czujnik 5V do ' + t + ' bar', 'Change: 5V sensor up to ' + f + ' bar → 5V sensor up to ' + t + ' bar'); }
    },
    dtc: {
      title: ['Wyłączanie kodów błędów (DTC off)', 'Error code (DTC) off'],
      lead: ['Wyszukuje w pliku ze sterownika Bosch EDC16 samochodów BMW (diesel) listę błędów i pozwala wyłączyć lub włączyć wybrane z nich.', 'Finds the error list in a Bosch EDC16 ECU file from BMW cars (diesel) and lets you disable or enable selected errors.'],
      none: ['Nie udało się odnaleźć listy błędów w pliku.', 'Could not find the error list in the file.'],
      cur: ['Znaleziono listę błędów: ', 'Error list found: '],
      info: [
        ['Usługa polega na wyłączeniu wybranych błędów w sterowniku. Tego typu zabieg stosuje się np. w przypadku konieczności pozbycia się uciążliwego „check engine” na skutek niesprawności jakiegoś niekluczowego dla pracy silnika komponentu lub pozbycia się błędów, które check engine nie powodują, ale są widoczne po odczytaniu błędów (np. błąd podgrzewacza paliwa, błąd nastawnika klapek w kolektorze ssącym itp.).', 'The tool disables selected errors in the ECU. It is used, for example, to get rid of an annoying "check engine" light caused by a fault in a component that is not critical for engine operation, or to remove errors that do not turn on the check engine light but are visible when reading the errors (e.g. fuel heater error, intake manifold flap actuator error, etc.).'],
        ['Wyłączenie błędu, np. niskiego ciśnienia paliwa (kłopoty z układem paliwowym), nie jest rozwiązaniem problemu, ale ukryciem problemu. Używaj narzędzia z rozwagą.', 'Disabling an error, e.g. low fuel pressure (fuel system problems), does not solve the problem – it hides it. Use the tool with caution.'],
        ['Uwaga: to są wewnętrzne numery błędów BMW, a nie tzw. P-Codes!', 'Note: these are internal BMW error numbers, not so-called P-codes!'],
        ['Uwaga: jeden wiersz tabeli obejmuje cztery kody błędów i ma jedno pole „Włączony” (tak wygląda wewnętrzna organizacja błędów w sterownikach BMW EDC16). Odznaczenie wiersza wyłącza wszystkie cztery kody naraz.', 'Note: one table row covers four error codes and has a single "Enabled" box (this is how errors are organised internally in BMW EDC16 control units). Unticking a row disables all four codes at once.']
      ]
    }
  };

  function riskNotice() {
    return T('Narzędzia są udostępniane na własne ryzyko użytkownika. Plik wynikowy nie ma przeliczonej sumy kontrolnej. Większość programatorów przelicza ją automatycznie podczas zapisu do sterownika, ale jeśli Twoje urządzenie tego nie robi, musisz przeliczyć sumę kontrolną samodzielnie przed zapisem pliku do sterownika. Wykonaj kopię oryginalnego pliku. Użytkownik odpowiada za zgodność modyfikacji z obowiązującymi przepisami.',
      'The tools are provided at the user\'s own risk. The resulting file does not have a recalculated checksum. Most programming tools recalculate it automatically when writing to the ECU, but if your device does not, you must recalculate the checksum yourself before writing the file to the ECU. Make a backup of the original file. The user is responsible for ensuring that the modification complies with applicable regulations.');
  }
  function ackText() {
    return T('Rozumiem i akceptuję: korzystam z narzędzia na własne ryzyko. Plik wynikowy nie ma przeliczonej sumy kontrolnej, więc moje urządzenie musi ją przeliczyć przy zapisie do sterownika albo muszę zrobić to sam przed zapisem.',
      'I understand and accept: I use the tool at my own risk. The resulting file does not have a recalculated checksum, so my device must recalculate it when writing to the ECU, or I must do it myself before writing.');
  }
  function download(name, data) {
    var blob = new Blob([data], { type: 'application/octet-stream' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }
  function readFile(file) {
    return new Promise(function (ok, fail) {
      if (file.size > MAX_BYTES) { fail(new Error('too_big')); return; }
      if (file.size === 0) { fail(new Error('empty')); return; }
      var fr = new FileReader();
      fr.onload = function () { ok(new Uint8Array(fr.result)); };
      fr.onerror = function () { fail(new Error('read')); };
      fr.readAsArrayBuffer(file);
    });
  }
  function googleDtc(code) {
    var c = String(code || '').trim();
    if (!/^[0-9A-Fa-f]{3,6}$/.test(c)) return;
    window.open('https://www.google.com/search?q=' + encodeURIComponent('BMW DTC ' + c.toUpperCase()), '_blank', 'noopener,noreferrer');
  }

  function mount(kind) {
    var cfg = PAGES[kind];
    var app = document.getElementById('app');
    var st = { name: '', data: null, analysis: null, err: '', done: null, target: '', ack: false, dtc: {}, dtcQ: '', dtcOn: false };

    var style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);

    function setErr(pl, en) { st.err = pl ? T(pl, en) : ''; }

    function onFile(file) {
      st.done = null; st.err = ''; st.analysis = null; st.data = null; st.target = ''; st.ack = false; st.dtc = {}; st.dtcQ = ''; st.dtcOn = false;
      if (!file) { render(); return; }
      st.name = file.name;
      readFile(file).then(function (data) {
        st.data = data;
        st.analysis = cfg.curve ? curveAnalyze(data, cfg.curve) : dtcAnalyze(data);
        if (st.analysis.found && !cfg.curve) st.analysis.rows.forEach(function (r) { st.dtc[r.i] = r.on; });
        render();
      }, function (e) {
        if (e.message === 'too_big') setErr('Plik jest za duży (maksymalnie 16 MB).', 'The file is too large (16 MB maximum).');
        else if (e.message === 'empty') setErr('Plik jest pusty.', 'The file is empty.');
        else setErr('Nie udało się odczytać pliku.', 'Could not read the file.');
        render();
      });
    }

    function dtcChanges() {
      var out = [];
      st.analysis.rows.forEach(function (r) { if (st.dtc[r.i] !== r.on) out.push({ i: r.i, code: r.codes[0], to: st.dtc[r.i] ? 'on' : 'off' }); });
      return out;
    }

    function finish(res, info) {
      download(res.name, res.data);
      st.done = { name: res.name, info: info };
      st.ack = false;
      render();
    }

    function runCurve() {
      try {
        var res = curveProcess(st.data, cfg.curve, st.target, st.name);
        finish(res, cfg.change(res.details.from, res.details.to));
      } catch (e) { setErr('Nie udało się przetworzyć pliku (' + e.message + ').', 'Could not process the file (' + e.message + ').'); render(); }
    }
    function runDtc() {
      try {
        var ch = dtcChanges();
        var res = dtcProcess(st.data, ch, st.name);
        finish(res, T('Wyłączono błędów: ', 'Errors disabled: ') + res.details.off + ', ' + T('włączono: ', 'enabled: ') + res.details.on);
      } catch (e) { setErr('Nie udało się przetworzyć pliku (' + e.message + ').', 'Could not process the file (' + e.message + ').'); render(); }
    }

    function dtcCard() {
      var a = st.analysis, card = el('div', { cls: 'card' });
      card.appendChild(el('h2', { text: T('2. Lista błędów', '2. Error list') }));
      card.appendChild(el('p', { cls: 'det', text: T(cfg.cur[0], cfg.cur[1]) + a.count + T(' wierszy (po 4 kody).', ' rows (4 codes each).') }));
      var q = el('input', { type: 'text', placeholder: T('Szukaj kodu błędu (np. 4820)', 'Search error code (e.g. 4820)'), autocomplete: 'off' });
      q.value = st.dtcQ;
      var g = el('button', { type: 'button', cls: 'sm ghost', text: T('Szukaj w Google', 'Search on Google') });
      var gmsg = el('div', { cls: 'msg err' });
      g.onclick = function () {
        if (!/^[0-9A-Fa-f]{3,6}$/.test(q.value.trim())) {
          gmsg.textContent = T('Proszę wskazać kod błędu (np. 4820).', 'Please enter an error code (e.g. 4820).');
          q.focus();
          return;
        }
        gmsg.textContent = '';
        googleDtc(q.value);
      };
      var onlyOn = el('input', { type: 'checkbox' }); onlyOn.checked = st.dtcOn;
      var lb = el('label', {}, [onlyOn, T('tylko włączone', 'enabled only')]);
      var b1 = el('button', { type: 'button', cls: 'sm ghost', text: T('Wyłącz widoczne', 'Disable visible') });
      var b2 = el('button', { type: 'button', cls: 'sm ghost', text: T('Włącz widoczne', 'Enable visible') });
      card.appendChild(el('div', { cls: 'dtcbar' }, [q, g, lb, b1, b2]));
      card.appendChild(gmsg);
      var head = el('tr', {}, [T('Kod 1', 'Code 1'), T('Kod 2', 'Code 2'), T('Kod 3', 'Code 3'), T('Kod 4', 'Code 4'), T('Włączony', 'Enabled')].map(function (t) { return el('th', { text: t }); }));
      var body = el('tbody'), rows = {};
      a.rows.forEach(function (r) {
        var tr = el('tr');
        r.codes.forEach(function (c) {
          var gq = el('a', { cls: 'gq', href: '#', text: c, title: T('Szukaj w Google: BMW DTC ', 'Search Google: BMW DTC ') + c });
          gq.onclick = function (e) { e.preventDefault(); googleDtc(c); };
          tr.appendChild(el('td', { cls: 'code' }, [gq]));
        });
        var cb = el('input', { type: 'checkbox' }); cb.checked = !!st.dtc[r.i];
        cb.onchange = function () { st.dtc[r.i] = cb.checked; refresh(); };
        tr.appendChild(el('td', {}, [cb]));
        rows[r.i] = { tr: tr, cb: cb, row: r }; body.appendChild(tr);
      });
      var table = el('table', {}, [el('thead', {}, [head]), body]);
      card.appendChild(el('div', { cls: 'dtcwrap' }, [table]));
      var cnt = el('div', { cls: 'small' }); card.appendChild(cnt);
      var btn = el('button', { type: 'button', text: T('Zastosuj zmiany i pobierz plik', 'Apply changes and download the file') });
      var ack = el('input', { type: 'checkbox' }); ack.checked = st.ack;
      function refresh() {
        var qq = q.value.trim().toUpperCase(), shown = 0, off = 0, on = 0;
        st.dtcQ = q.value; st.dtcOn = onlyOn.checked;
        a.rows.forEach(function (r) {
          var ok = (!qq || r.codes.some(function (c) { return c.indexOf(qq) >= 0; })) && (!st.dtcOn || st.dtc[r.i]);
          var changed = st.dtc[r.i] !== r.on;
          rows[r.i].tr.className = (ok ? '' : 'hidden') + (changed ? ' chg' : '');
          if (ok) shown++;
          if (changed) { if (st.dtc[r.i]) on++; else off++; }
        });
        cnt.textContent = T('Widocznych: ', 'Visible: ') + shown + ' / ' + a.rows.length + ' · ' + T('do wyłączenia: ', 'to disable: ') + off + ' · ' + T('do włączenia: ', 'to enable: ') + on;
        btn.disabled = !(off + on > 0 && ack.checked);
      }
      function setVisible(val) {
        a.rows.forEach(function (r) { if (rows[r.i].tr.className.indexOf('hidden') < 0) { st.dtc[r.i] = val; rows[r.i].cb.checked = val; } });
        refresh();
      }
      q.oninput = function () { gmsg.textContent = ''; refresh(); }; onlyOn.onchange = refresh;
      q.onkeydown = function (e) { if (e.key === 'Enter') e.preventDefault(); };
      b1.onclick = function () { setVisible(false); }; b2.onclick = function () { setVisible(true); };
      ack.onchange = function () { st.ack = ack.checked; refresh(); };
      card.appendChild(el('label', { cls: 'chk' }, [ack, ackText()]));
      btn.onclick = runDtc;
      card.appendChild(btn);
      refresh();
      return card;
    }

    function curveCard() {
      var a = st.analysis, card = el('div', { cls: 'card' });
      card.appendChild(el('h2', { text: T('2. Wybór czujnika', '2. Choose the sensor') }));
      var labels = CURVES[cfg.curve].labels;
      var lab = function (id) { return T(labels[id][0], labels[id][1]); };
      card.appendChild(el('p', { cls: 'det', text: T(cfg.cur[0], cfg.cur[1]) + lab(a.current) + ' (' + T('adres ', 'offset ') + a.offset + ')' }));
      card.appendChild(el('label', { text: T('Nowy czujnik', 'New sensor') }));
      var sel = el('select'); sel.appendChild(el('option', { value: '', text: T('— proszę wybrać czujnik —', '— please select a sensor —') }));
      a.options.forEach(function (id) { sel.appendChild(el('option', { value: id, text: lab(id) })); });
      sel.value = st.target;
      card.appendChild(sel);
      var ack = el('input', { type: 'checkbox' }); ack.checked = st.ack;
      var btn = el('button', { type: 'button', text: T('Zmień czujnik i pobierz plik', 'Change the sensor and download the file') });
      function refresh() { btn.disabled = !(sel.value && ack.checked); }
      sel.onchange = function () { st.target = sel.value; refresh(); };
      ack.onchange = function () { st.ack = ack.checked; refresh(); };
      card.appendChild(el('label', { cls: 'chk' }, [ack, ackText()]));
      btn.onclick = runCurve;
      card.appendChild(btn);
      refresh();
      return card;
    }

    function render() {
      document.title = T(cfg.title[0], cfg.title[1]) + ' – ECU-Perfect';
      app.innerHTML = '';
      app.appendChild(el('h1', { text: T(cfg.title[0], cfg.title[1]) }));
      app.appendChild(el('p', { cls: 'lead', text: T(cfg.lead[0], cfg.lead[1]) }));

      var c1 = el('div', { cls: 'card' });
      c1.appendChild(el('h2', { text: T('1. Wybierz plik ze sterownika', '1. Choose the ECU file') }));
      var inp = el('input', { type: 'file' });
      inp.onchange = function () { onFile(inp.files[0]); };
      c1.appendChild(inp);
      if (st.name && st.data) c1.appendChild(el('div', { cls: 'small', text: T('Wczytano: ', 'Loaded: ') + st.name + ' (' + (st.data.length / 1048576).toFixed(2) + ' MB)' }));
      c1.appendChild(el('div', { cls: 'small', text: T('Plik jest przetwarzany wyłącznie w Twojej przeglądarce i nie jest nigdzie wysyłany. Narzędzie działa wyłącznie dla plików ze sterowników Bosch EDC16 z samochodów BMW (diesel).', 'The file is processed entirely in your browser and is not uploaded anywhere. The tool works only for files from Bosch EDC16 control units of BMW cars (diesel).') }));
      if (st.err) c1.appendChild(el('div', { cls: 'msg err', text: st.err }));
      app.appendChild(c1);

      if (st.data && st.analysis) {
        if (!st.analysis.found) {
          var cn = el('div', { cls: 'card' });
          cn.appendChild(el('div', { cls: 'msg err', text: T(cfg.none[0], cfg.none[1]) }));
          cn.appendChild(el('div', { cls: 'small', text: T('Sprawdź, czy to pełny odczyt ze sterownika Bosch EDC16 z samochodu BMW (diesel). Narzędzie działa tylko dla BMW. Jeśli masz inny plik i potrzebujesz modyfikacji, napisz do nas: contact@ecu-perfect.pl', 'Check that this is a full read-out from a Bosch EDC16 control unit from a BMW (diesel). The tool works for BMW only. If you have a different file and need a modification, write to us: contact@ecu-perfect.pl') }));
          app.appendChild(cn);
        } else if (cfg.curve) app.appendChild(curveCard());
        else app.appendChild(dtcCard());
      }

      if (st.done) {
        var cd = el('div', { cls: 'card' });
        cd.appendChild(el('h2', { text: T('Gotowe', 'Done') }));
        cd.appendChild(el('p', { cls: 'det', text: T('Pobrano plik: ', 'Downloaded file: ') + st.done.name }));
        cd.appendChild(el('div', { cls: 'small', text: st.done.info }));
        app.appendChild(cd);
      }

      var ci = el('div', { cls: 'card' });
      ci.appendChild(el('h2', { text: T('Informacje o narzędziu', 'About the tool') }));
      cfg.info.forEach(function (p) { ci.appendChild(el('p', { text: T(p[0], p[1]) })); });
      ci.appendChild(el('div', { cls: 'notice', text: riskNotice() }));
      app.appendChild(ci);

      var f = document.getElementById('siteFoot');
      if (!f) { f = el('footer', { id: 'siteFoot' }); document.body.appendChild(f); }
      f.textContent = '';
      f.appendChild(document.createTextNode('© ECU-Perfect · chiptuning · Wrocław'));
      f.appendChild(el('small', { style: 'display:block;margin-top:6px;opacity:.8', text: T('Kopiowanie, przerabianie i wykorzystywanie treści, narzędzi oraz logo tej strony wymaga zgody. Udostępnianie linków jest dozwolone.', 'Copying, modifying and using the content, tools and logo of this website requires permission. Sharing links is allowed.') }));
    }

    render();
    if (window.I18N && window.I18N.onChange) window.I18N.onChange(render);
  }

  window.ECUTOOLS = { mount: mount, engine: engine };
})();
