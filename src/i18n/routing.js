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
    '/shrine': {
      en: '/shrine',
      it: '/shrine',
    },
    '/blog': '/blog',
    '/videogames': {
      en: '/videogames',
      it: '/videogiochi',
    },
    '/music': {
      en: '/music',
      it: '/musica',
    },
    '/anime': {
      en: '/anime',
      it: '/anime',
    },
    // aggiungi tutte le pagine che vuoi localizzare
  },
});
