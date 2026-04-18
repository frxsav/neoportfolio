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
    '/games': {
      en: '/games',
      it: '/giochi',
    },
    '/music': {
      en: '/music',
      it: '/musica',
    },
    '/music-rec': {
      en: '/rec/music-rec',
      it: '/rec/musica-rec',
    },
    // aggiungi tutte le pagine che vuoi localizzare
  },
});
