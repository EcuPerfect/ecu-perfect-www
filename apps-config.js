// PRODUCTION version of apps-config.js (used by build_portal.bat instead of the local test one).
// ECU-Perfect applications shown as tiles in the panel (panel.html).
// url  = address of the application (it gets the login session in the address: #access_token=...&refresh_token=...)
// api  = address of the application's account API (number of the user's data, deletion with the account);
//        empty = the application keeps no user data.
// meta = public version address of the application (shown only to administrators under the tile; optional).
window.ECUP_APPS = [
  {
    id: 'gearbox',
    name: { pl: 'Edytor skrzyń biegów', en: 'Gearbox editor' },
    desc: { pl: 'Punkty zmian biegów i ograniczniki momentu w plikach sterowników skrzyń automatycznych (TCU). Wersje, kontrole, eksport binu.',
            en: 'Shift points and torque limiters in automatic gearbox controller (TCU) files. Versions, checks, bin export.' },
    url: 'https://gearbox.ecu-perfect.pl/',
    api: 'https://gearbox.ecu-perfect.pl/api/gearbox/op',
    meta: 'https://gearbox.ecu-perfect.pl/api/gearbox/describe'
  },
  {
    id: 'mappack',
    name: { pl: 'Konwerter mappacków', en: 'Mappack converter' },
    desc: { pl: 'Konwersja mappacków WinOLS (KP, CSV) i TunerPro (XDF).',
            en: 'Mappack conversion between WinOLS (KP, CSV) and TunerPro (XDF).' },
    url: 'https://mappack.ecu-perfect.pl/',
    api: 'https://mappack.ecu-perfect.pl/api/mappack/op',
    meta: 'https://mappack.ecu-perfect.pl/api/mappack/describe'
  }
  ,{
    id: 'migrate',
    name: { pl: 'Przenoszenie mappacka i modyfikacji', en: 'Mappack & Mod Transfer' },
    sub: { pl: 'na inny software', en: 'to another software' },
    desc: { pl: 'Przenieś mappack, modyfikację albo oba ze starej wersji oprogramowania sterownika na nową.',
            en: 'Move the mappack, the mod or both from an old software version of a control unit to a new one.' },
    url: 'https://migrate.ecu-perfect.pl/',
    api: 'https://migrate.ecu-perfect.pl/api/v1/op',
    meta: 'https://migrate.ecu-perfect.pl/api/v1/meta'
  }
  // BMW Sport Display Calibration: deployed 2026-11-26. Keep adminOnly until the stage-5 decision.
  ,{
    id: 'sportdisplay',
    adminOnly: true,
    name: { pl: 'Kalibracja wskaźników SPORT – BMW', en: 'BMW Sport Display Calibration' },
    sub: { pl: 'Skala mocy i momentu po tuningu', en: 'Power & torque gauge scale after tuning' },
    desc: { pl: 'Skala wskaźników SPORT mocy i momentu w BMW po tuningu (MG1, MEVD17, MD1, EDC17). Projekty, podgląd, eksport binu.',
            en: 'Scale of the BMW power and torque sport gauges after tuning (MG1, MEVD17, MD1, EDC17). Projects, preview, bin export.' },
    url: 'https://sportdisplay.ecu-perfect.pl/',
    api: 'https://sportdisplay.ecu-perfect.pl/api/v1/op',
    meta: 'https://sportdisplay.ecu-perfect.pl/api/v1/meta'
  }
];
