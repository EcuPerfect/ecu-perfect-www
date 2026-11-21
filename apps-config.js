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
    name: { pl: 'Migracja tuningu', en: 'Tune Migration' },
    desc: { pl: 'Przenieś mappack i zmiany tunera ze starej wersji oprogramowania na nową.',
            en: 'Move the mappack and the tuner\'s changes from an old software version to a new one.' },
    url: 'https://migrate.ecu-perfect.pl/',
    api: 'https://migrate.ecu-perfect.pl/api/v1/op'
  }
];
