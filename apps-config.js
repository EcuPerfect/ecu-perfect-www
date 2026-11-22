// PRODUCTION version of apps-config.js (used by build_portal.bat instead of the local test one).
// ECU-Perfect applications shown as tiles in the panel (panel.html).
// url  = address of the application (it gets the login session in the address: #access_token=...&refresh_token=...)
// api  = address of the application's account API (number of the user's data, deletion with the account);
//        empty = the application keeps no user data.
window.ECUP_APPS = [
  {
    id: 'gearbox',
    name: { pl: 'Edytor skrzyń biegów', en: 'Gearbox editor' },
    desc: { pl: 'Punkty zmian biegów i ograniczniki momentu w plikach sterowników skrzyń automatycznych (TCU). Wersje, kontrole, eksport binu.',
            en: 'Shift points and torque limiters in automatic gearbox controller (TCU) files. Versions, checks, bin export.' },
    url: 'https://gearbox.ecu-perfect.pl/',
    api: 'https://gearbox.ecu-perfect.pl/api/gearbox/op'
  },
  {
    id: 'mappack',
    name: { pl: 'Konwerter mappacków', en: 'Mappack converter' },
    desc: { pl: 'Konwersja mappacków WinOLS (KP, CSV) i TunerPro (XDF).',
            en: 'Mappack conversion between WinOLS (KP, CSV) and TunerPro (XDF).' },
    url: 'https://mappack.ecu-perfect.pl/',
    api: 'https://mappack.ecu-perfect.pl/api/mappack/op'
  }
  ,{
    id: 'migrate',
    name: { pl: 'Przenoszenie mappacka i modyfikacji', en: 'Mappack & Mod Transfer' },
    sub: { pl: 'na inny software', en: 'to another software' },
    desc: { pl: 'Przenieś mappack, modyfikację albo oba ze starej wersji oprogramowania sterownika na nową.',
            en: 'Move the mappack, the mod or both from an old software version of a control unit to a new one.' },
    url: 'https://migrate.ecu-perfect.pl/',
    api: 'https://migrate.ecu-perfect.pl/api/v1/op'
  }
];
