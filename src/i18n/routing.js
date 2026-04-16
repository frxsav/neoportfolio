import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'it'],
  defaultLocale: 'it',
  localePrefix: 'never',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      it: '/chi-sono',
    },
    '/shrines': {
      en: 'shrines',
      it: 'shrine',
    },
    '/blog': '/blog',
    '/games': {
      en: '/games',
      it: '/giochi',
    },
    '/music': {
      en: 'music',
      it: 'musica',
    },
    // aggiungi tutte le pagine che vuoi localizzare
  },
});
