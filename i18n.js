/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home'],
  },
  loadLocaleFrom: (lang, ns) => import(`./src/translations/${lang}/${ns}.json`).then((m) => m.default),
};
