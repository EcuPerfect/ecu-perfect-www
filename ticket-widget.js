/* ECU-Perfect tickets ("Zgłoś problem") - shared module for the client panel.
   Usage (panel.html):
     ECUP_TICKETS.init({ sb: supabaseClient, apps: window.ECUP_APPS });
     ECUP_TICKETS.renderList(containerElement);          // "My tickets" list with unread marks
     ECUP_TICKETS.openForm({ app: 'gearbox', docRef: '...', context: { app_version: '...' } });  // report form
   Applications on their own address call the same database functions directly (see PROJEKT_zgloszenia_tickety.md). */
(function () {
  var sb = null, apps = [], listEl = null;
  var ST = {
    open: ['Otwarte', 'Open'], in_progress: ['W trakcie', 'In progress'],
    waiting_user: ['Czekamy na Twoją odpowiedź', 'Waiting for your reply'], closed: ['Zamknięte', 'Closed']
  };
  var ERR = {
    rate_limited: ['Za dużo zgłoszeń dzisiaj. Spróbuj jutro albo napisz na contact@ecu-perfect.pl.', 'Too many reports today. Try tomorrow or write to contact@ecu-perfect.pl.'],
    bad_body: ['Opisz problem (do 4000 znaków).', 'Describe the problem (up to 4000 characters).'],
    bad_message: ['Wiadomość musi mieć od 1 do 2000 znaków.', 'The message must be 1 to 2000 characters.'],
    ticket_closed: ['Zgłoszenie jest zamknięte. Otwórz je ponownie, żeby napisać.', 'The ticket is closed. Reopen it to write.'],
    ticket_not_found: ['Nie znaleziono zgłoszenia.', 'Ticket not found.'],
    bad_doc_ref: ['Identyfikator projektu jest za długi (max 100 znaków).', 'The project ID is too long (max 100 characters).'],
    consent_required: ['Zaznacz wymagane zgody (oznaczone gwiazdką).', 'Tick the required consents (marked with an asterisk).'],
    bad_consents: ['Niepoprawne zgody w zgłoszeniu.', 'Invalid consents in the ticket.'],
    bad_context_text: ['Informacje dołączane automatycznie są za długie.', 'The automatically attached information is too long.']
  };
  function tr(pl, en) { return window.I18N ? I18N.t(pl, en) : pl; }
  function T(p) { return tr(p[0], p[1]); }
  function errText(e) {
    var m = e && e.message ? e.message : '';
    for (var k in ERR) { if (m.indexOf(k) >= 0) return T(ERR[k]); }
    return m || tr('Błąd', 'Error');
  }
  function el(tag, props, kids) {
    var e = document.createElement(tag);
    if (props) for (var k in props) { if (k === 'style') e.style.cssText = props[k]; else if (k === 'text') e.textContent = props[k]; else e[k] = props[k]; }
    (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }
  function appList() { return typeof apps === 'function' ? apps() : apps; }   // apps may be a function (list can change after login)
  function allApps() { return window.ECUP_APPS || appList(); }                 // names of ALL apps (also admin-only ones, for existing tickets)
  function appName(code) {
    if (code === 'general') return tr('Problem ogólny', 'General problem');
    var all = allApps();
    for (var i = 0; i < all.length; i++) if (all[i].id === code) { var n = all[i].name; return n ? tr(n.pl, n.en) : code; }
    return code;
  }
  function fmt(s) { return s ? new Date(s).toLocaleString() : ''; }

  function overlay(title) {
    var box = el('div', { className: 'mbox', style: 'max-width:640px' });
    var wrap = el('div', { className: 'modal' }, [box]);
    box.appendChild(el('h2', { text: title }));
    document.body.appendChild(wrap);
    return { box: box, close: function () { wrap.remove(); } };
  }
  var TA = 'width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--line);background:#0f0f16;color:var(--txt);font-size:1rem;font-family:inherit;margin-top:6px';

  // ---- new ticket form
  function openForm(pref) {
    pref = pref || {};
    var o = overlay(tr('Zgłoś problem', 'Report a problem'));
    var sel = el('select', { style: TA });
    var codes = appList().map(function (a) { return a.id; }).concat(['general']);
    codes.forEach(function (c) { var op = el('option', { value: c, text: appName(c) }); sel.appendChild(op); });
    sel.value = codes.indexOf(pref.app) >= 0 ? pref.app : 'general';
    var doc = el('input', { type: 'text', maxLength: 100, value: pref.docRef || '', style: TA, placeholder: tr('np. GUID projektu (opcjonalnie)', 'e.g. project ID (optional)') });
    var cat = el('select', { style: TA }, [
      el('option', { value: 'problem', text: tr('Zgłoś problem', 'Report a problem') }),
      el('option', { value: 'other', text: tr('Inne', 'Other') })
    ]);
    var body = el('textarea', { rows: 6, maxLength: 4000, style: TA, placeholder: tr('Opisz, co się stało i czego oczekiwałeś.', 'Describe what happened and what you expected.') });
    var msg = el('div', { className: 'msg' });
    var send = el('button', { type: 'button', text: tr('Wyślij', 'Send') });
    var cancel = el('button', { type: 'button', className: 'ghost', text: tr('Anuluj', 'Cancel'), style: 'margin-left:8px' });
    var note = el('p', { className: 'small', text: tr('Nie wpisuj haseł ani danych osobowych osób trzecich. Odpowiedź zobaczysz w panelu w „Moje zgłoszenia”.', 'Do not enter passwords or third-party personal data. You will see the reply in the panel under "My tickets".') });
    // optional extras prepared by the application: automatic context text + consent checkboxes
    var consents = (pref.consents || []).slice(0, 5), boxes = [];
    var extra = [];
    if (pref.contextText) {
      extra.push(el('details', { style: 'margin:10px 0' }, [
        el('summary', { text: tr('Informacje dołączane automatycznie (podgląd)', 'Information attached automatically (preview)'), style: 'cursor:pointer' }),
        el('div', { className: 'small', style: 'white-space:pre-wrap;margin-top:6px', text: String(pref.contextText).slice(0, 4000) })
      ]));
    }
    consents.forEach(function (c) {
      var cb = el('input', { type: 'checkbox', style: 'margin-right:8px;vertical-align:top;margin-top:4px' });
      boxes.push(cb);
      extra.push(el('label', { style: 'display:block;margin:8px 0;font-size:.92rem;line-height:1.4' }, [cb,
        el('span', { text: tr(c.pl, c.en) + (c.required ? ' *' : ' ' + tr('(opcjonalnie)', '(optional)')) })]));
    });
    function consentsOk() { for (var i = 0; i < consents.length; i++) if (consents[i].required && !boxes[i].checked) return false; return true; }
    function syncSend() { send.disabled = !consentsOk(); }
    boxes.forEach(function (cb) { cb.onchange = syncSend; });
    [el('label', { text: tr('Aplikacja', 'Application') }), sel, el('label', { text: tr('ID projektu', 'Project ID') }), doc,
     el('label', { text: tr('Rodzaj', 'Type') }), cat, el('label', { text: tr('Opis', 'Description') }), body, note].concat(extra, [send, cancel, msg]).forEach(function (n) { o.box.appendChild(n); });
    syncSend();
    cancel.onclick = o.close;
    send.onclick = async function () {
      if (!body.value.trim()) { msg.textContent = T(ERR.bad_body); msg.className = 'msg err'; return; }
      if (!consentsOk()) { msg.textContent = T(ERR.consent_required); msg.className = 'msg err'; return; }
      send.disabled = true; msg.textContent = ''; msg.className = 'msg';
      var ctx = Object.assign({ browser: (navigator.userAgent || '').slice(0, 200), page: location.pathname }, pref.context || {});
      var r;
      if (pref.contextText || consents.length) {
        r = await sb.rpc('create_ticket_ex', { p_app: sel.value, p_doc_ref: doc.value.trim() || null, p_category: cat.value, p_body: body.value, p_context: ctx,
          p_context_text: pref.contextText || null,
          p_consents: consents.map(function (c, i) { return { id: c.id, version: c.version, required: !!c.required, value: boxes[i].checked, pl: c.pl, en: c.en }; }) });
      } else {
        r = await sb.rpc('create_ticket', { p_app: sel.value, p_doc_ref: doc.value.trim() || null, p_category: cat.value, p_body: body.value, p_context: ctx });
      }
      send.disabled = false;
      if (r.error) { msg.textContent = errText(r.error); msg.className = 'msg err'; return; }
      o.close();
      if (listEl) renderList(listEl);
    };
  }

  // ---- ticket thread
  async function openThread(t) {
    var o = overlay(appName(t.app) + ' · ' + fmt(t.created_at));
    var info = el('p', { className: 'small', text: T(ST[t.status]) + (t.doc_ref ? ' · ID: ' + t.doc_ref : '') });
    var first = el('div', { style: 'white-space:pre-wrap;margin:8px 0', text: t.body });
    var thread = el('div', { style: 'max-height:260px;overflow:auto;border:1px solid var(--line);border-radius:8px;padding:10px;margin:12px 0;background:#0f0f16' });
    var res = t.status === 'closed' && t.resolution ? el('p', { style: 'color:var(--txt)', text: tr('Rozwiązanie: ', 'Resolution: ') + t.resolution }) : null;
    var text = el('textarea', { rows: 3, maxLength: 2000, style: TA, placeholder: tr('Napisz wiadomość…', 'Write a message…') });
    var msg = el('div', { className: 'msg' });
    var send = el('button', { type: 'button', text: tr('Wyślij', 'Send') });
    var reopen = el('button', { type: 'button', className: 'ghost', text: tr('Otwórz ponownie', 'Reopen'), style: 'margin-left:8px' });
    var close = el('button', { type: 'button', className: 'ghost', text: tr('Zamknij okno', 'Close'), style: 'margin-left:8px' });
    // read-only: automatic context and consents given with the ticket
    var extra = null;
    if (t.context_text || (t.consents && t.consents.length)) {
      extra = el('details', { style: 'margin:8px 0' }, [el('summary', { text: tr('Dołączone informacje i zgody', 'Attached information and consents'), style: 'cursor:pointer' })]);
      (t.consents || []).forEach(function (c) {
        extra.appendChild(el('div', { className: 'small', style: 'margin-top:6px', text: (c.value ? '☑ ' : '☐ ') + tr(c.pl, c.en) + ' (v' + c.version + ')' }));
      });
      if (t.context_text) extra.appendChild(el('div', { className: 'small', style: 'white-space:pre-wrap;margin-top:6px', text: t.context_text }));
    }
    [info, first, extra, thread, res].forEach(function (n) { if (n) o.box.appendChild(n); });
    if (t.status !== 'closed') { o.box.appendChild(text); o.box.appendChild(send); }
    else o.box.appendChild(reopen);
    o.box.appendChild(close); o.box.appendChild(msg);
    async function load() {
      var r = await sb.from('ticket_messages').select('author_role,body,created_at').eq('ticket_id', t.id).order('created_at', { ascending: true });
      thread.innerHTML = '';
      (r.data || []).forEach(function (m) {
        var who = m.author_role === 'admin' ? 'ECU-Perfect' : m.author_role === 'system' ? tr('System', 'System') : tr('Ty', 'You');
        thread.appendChild(el('div', { className: 'small', text: who + ' · ' + fmt(m.created_at) }));
        thread.appendChild(el('div', { style: 'white-space:pre-wrap;margin-bottom:10px', text: m.body }));
      });
      thread.scrollTop = thread.scrollHeight;
    }
    close.onclick = function () { o.close(); if (listEl) renderList(listEl); };
    send.onclick = async function () {
      if (!text.value.trim()) return;
      send.disabled = true;
      var r = await sb.rpc('ticket_post_message', { p_ticket: t.id, p_body: text.value });
      send.disabled = false;
      if (r.error) { msg.textContent = errText(r.error); msg.className = 'msg err'; return; }
      text.value = ''; msg.textContent = ''; load();
    };
    reopen.onclick = async function () {
      var r = await sb.rpc('ticket_reopen', { p_ticket: t.id });
      if (r.error) { msg.textContent = errText(r.error); msg.className = 'msg err'; return; }
      o.close(); if (listEl) renderList(listEl);
    };
    await load();
    if (t.unread_user) sb.rpc('ticket_mark_read', { p_ticket: t.id });
  }

  // ---- list "My tickets"
  async function renderList(container) {
    listEl = container;
    container.innerHTML = '';
    var cols = 'id,app,doc_ref,category,body,status,resolution,unread_user,created_at,updated_at';
    var r = await sb.from('tickets').select(cols + ',context_text,consents').order('updated_at', { ascending: false }).limit(100);
    if (r.error) r = await sb.from('tickets').select(cols).order('updated_at', { ascending: false }).limit(100);   // migration with context columns not applied yet
    if (r.error) { container.appendChild(el('p', { className: 'small', text: errText(r.error) })); return; }
    if (!r.data.length) { container.appendChild(el('p', { className: 'small', text: tr('Nie masz jeszcze zgłoszeń.', 'You have no tickets yet.') })); return; }
    r.data.forEach(function (t) {
      var row = el('div', { style: 'display:flex;gap:10px;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line);flex-wrap:wrap' });
      var left = el('div', { style: 'min-width:0;flex:1' }, [
        el('div', { text: (t.unread_user ? '● ' : '') + appName(t.app) + ' · ' + T(ST[t.status]), style: t.unread_user ? 'font-weight:700' : '' }),
        el('div', { className: 'small', text: fmt(t.created_at) + ' · ' + t.body.slice(0, 90) + (t.body.length > 90 ? '…' : '') })
      ]);
      var b = el('button', { type: 'button', className: 'ghost sm', text: tr('Otwórz', 'Open'), style: 'margin-top:0' });
      b.onclick = function () { openThread(t); };
      row.appendChild(left); row.appendChild(b); container.appendChild(row);
    });
  }

  window.ECUP_TICKETS = {
    init: function (o) { sb = o.sb; apps = o.apps || []; },
    openForm: openForm,
    renderList: renderList
  };
})();

/* Standalone widget for applications on their own address (e.g. gearbox.ecu-perfect.pl).
   No supabase-js, no page CSS needed. Contract (agreed with GEARBOX):
     ECUP_TICKET.open({ app: 'gearbox', doc_ref: '<project guid>' | null, lang: 'pl'|'en',
                        token: '<user access token>', config: { url: '<supabase url>', key: '<publishable key>' },
                        // optional (needs migration 20261121000100): automatic context and consents
                        context_text: 'free text prepared by the app, max 4000 chars, informational only',
                        context: { engine: '...', ai_version: '...', transfer_at: '...', request_id: '...' },   // whitelisted keys only
                        consents: [{ id: '<app>.<name>', version: 1, required: true|false, pl: '...', en: '...' }] })   // max 5, id starts with '<app>.'
       -> Promise<{ ok: true, ticket_id } | { ok: false, canceled: true } | { ok: false, error }> */
(function () {
  var TX = {
    pl: { title: 'Zgłoś problem', cat: 'Rodzaj', c_problem: 'Zgłoś problem', c_other: 'Inne', desc: 'Opis', ph: 'Opisz, co się stało i czego oczekiwałeś.',
          send: 'Wyślij', cancel: 'Anuluj', note: 'Nie wpisuj haseł ani danych osobowych osób trzecich. Odpowiedź zobaczysz w panelu ecu-perfect.pl w „Moje zgłoszenia”.',
          need: 'Opisz problem.', ok: 'Zgłoszenie wysłane. Odpowiedź zobaczysz w panelu ecu-perfect.pl w „Moje zgłoszenia”.', close: 'Zamknij',
          rate: 'Za dużo zgłoszeń dzisiaj. Spróbuj jutro albo napisz na contact@ecu-perfect.pl.', err: 'Nie udało się wysłać zgłoszenia.',
          ctx: 'Informacje dołączane automatycznie (podgląd)', opt: '(opcjonalnie)', needc: 'Zaznacz wymagane zgody (oznaczone gwiazdką).' },
    en: { title: 'Report a problem', cat: 'Type', c_problem: 'Report a problem', c_other: 'Other', desc: 'Description', ph: 'Describe what happened and what you expected.',
          send: 'Send', cancel: 'Cancel', note: 'Do not enter passwords or third-party personal data. You will see the reply in the ecu-perfect.pl panel under "My tickets".',
          need: 'Describe the problem.', ok: 'Ticket sent. You will see the reply in the ecu-perfect.pl panel under "My tickets".', close: 'Close',
          rate: 'Too many reports today. Try tomorrow or write to contact@ecu-perfect.pl.', err: 'Could not send the ticket.',
          ctx: 'Information attached automatically (preview)', opt: '(optional)', needc: 'Tick the required consents (marked with an asterisk).' }
  };
  var CSS = {
    wrap: 'position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;font-family:Segoe UI,system-ui,Arial,sans-serif',
    box: 'background:#15151d;color:#f2f2f6;border:1px solid #262633;border-radius:12px;padding:22px;max-width:560px;width:100%;max-height:90vh;overflow:auto;line-height:1.5',
    field: 'width:100%;box-sizing:border-box;padding:10px 12px;border-radius:8px;border:1px solid #262633;background:#0f0f16;color:#f2f2f6;font-size:1rem;font-family:inherit;margin:6px 0 12px',
    btn: 'padding:10px 20px;border-radius:10px;border:2px solid #e5202e;background:#e5202e;color:#fff;font-weight:700;font-size:.95rem;cursor:pointer;font-family:inherit',
    ghost: 'padding:10px 20px;border-radius:10px;border:2px solid #262633;background:transparent;color:#f2f2f6;font-weight:700;font-size:.95rem;cursor:pointer;font-family:inherit;margin-left:8px',
    small: 'color:#9a9aab;font-size:.85rem;margin:0 0 14px'
  };
  function mk(tag, css, text) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (text != null) e.textContent = text; return e; }

  window.ECUP_TICKET = {
    open: function (o) {
      o = o || {};
      var t = TX[o.lang === 'en' ? 'en' : 'pl'];
      return new Promise(function (resolve) {
        var wrap = mk('div', CSS.wrap), box = mk('div', CSS.box);
        wrap.appendChild(box); document.body.appendChild(wrap);
        function done(r) { wrap.remove(); resolve(r); }
        box.appendChild(mk('h2', 'margin:0 0 12px;font-size:1.2rem', t.title));
        box.appendChild(mk('label', '', t.cat));
        var cat = mk('select', CSS.field);
        [['problem', t.c_problem], ['other', t.c_other]].forEach(function (c) { var op = document.createElement('option'); op.value = c[0]; op.textContent = c[1]; cat.appendChild(op); });
        box.appendChild(cat);
        box.appendChild(mk('label', '', t.desc));
        var body = mk('textarea', CSS.field); body.rows = 6; body.maxLength = 4000; body.placeholder = t.ph; box.appendChild(body);
        box.appendChild(mk('p', CSS.small, t.note));
        // optional extras prepared by the application: context_text (string, max 4000), context (object, whitelisted keys), consents (max 5)
        var lng = o.lang === 'en' ? 'en' : 'pl';
        var consents = (o.consents || []).slice(0, 5), boxes = [];
        var ctext = o.context_text ? String(o.context_text).slice(0, 4000) : '';
        if (ctext) {
          var det = mk('details', 'margin:10px 0');
          det.appendChild(mk('summary', 'cursor:pointer', t.ctx));
          det.appendChild(mk('div', CSS.small + ';white-space:pre-wrap;margin-top:6px', ctext));
          box.appendChild(det);
        }
        consents.forEach(function (c) {
          var lab = mk('label', 'display:block;margin:8px 0;font-size:.92rem;line-height:1.4');
          var cb = document.createElement('input'); cb.type = 'checkbox'; cb.style.cssText = 'margin-right:8px;vertical-align:top;margin-top:4px';
          boxes.push(cb); lab.appendChild(cb);
          lab.appendChild(mk('span', '', (c[lng] || c.pl) + (c.required ? ' *' : ' ' + t.opt)));
          box.appendChild(lab);
        });
        function consentsOk() { for (var i = 0; i < consents.length; i++) if (consents[i].required && !boxes[i].checked) return false; return true; }
        var msg = mk('div', 'min-height:1.3em;margin-top:10px;color:#ff4b57');
        var send = mk('button', CSS.btn, t.send), cancel = mk('button', CSS.ghost, t.cancel);
        send.type = 'button'; cancel.type = 'button';
        function syncSend() { send.disabled = !consentsOk(); send.style.opacity = send.disabled ? '.5' : '1'; }
        boxes.forEach(function (cb) { cb.onchange = syncSend; });
        syncSend();
        box.appendChild(send); box.appendChild(cancel); box.appendChild(msg);
        cancel.onclick = function () { done({ ok: false, canceled: true }); };
        send.onclick = function () {
          if (!body.value.trim()) { msg.textContent = t.need; return; }
          if (!consentsOk()) { msg.textContent = t.needc; return; }
          send.disabled = true; msg.textContent = '';
          var ctx = Object.assign({ browser: (navigator.userAgent || '').slice(0, 200), page: location.host + location.pathname }, o.context || {});
          var extended = !!(ctext || consents.length);
          var payload = { p_app: o.app || 'general', p_doc_ref: o.doc_ref || null, p_category: cat.value, p_body: body.value, p_context: ctx };
          if (extended) {
            payload.p_context_text = ctext || null;
            payload.p_consents = consents.map(function (c, i) { return { id: c.id, version: c.version, required: !!c.required, value: boxes[i].checked, pl: c.pl, en: c.en }; });
          }
          fetch(String(o.config.url).replace(/\/+$/, '') + '/rest/v1/rpc/' + (extended ? 'create_ticket_ex' : 'create_ticket'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', apikey: o.config.key, Authorization: 'Bearer ' + o.token },
            body: JSON.stringify(payload)
          }).then(function (r) { return r.json().catch(function () { return null; }).then(function (j) { return { status: r.status, ok: r.ok, j: j }; }); })
            .then(function (x) {
              if (x.ok && typeof x.j === 'string') {
                box.innerHTML = '';
                box.appendChild(mk('p', '', t.ok));
                var c = mk('button', CSS.btn, t.close); c.type = 'button'; c.onclick = function () { done({ ok: true, ticket_id: x.j }); };
                box.appendChild(c);
                return;
              }
              send.disabled = false;
              var m = (x.j && (x.j.message || '')) || '';
              msg.textContent = m.indexOf('rate_limited') >= 0 ? t.rate : m.indexOf('consent_required') >= 0 ? t.needc : t.err;
              syncSend();
            })
            .catch(function () { send.disabled = false; msg.textContent = t.err; });
        };
      });
    }
  };
})();
