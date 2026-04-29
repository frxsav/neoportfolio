import { Genre } from './constants';

export const navigation = [
  {
    name: 'homepage',
    href: '/',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'shrine',
    href: '/shrine',
  },
  {
    name: 'blog',
    href: '/blog',
  },
  {
    name: 'games',
    href: '/games',
  },
  {
    name: 'music',
    href: '/music',
  },
  {
    name: 'recs',
    href: '/recs',
    items: [
      {
        name: 'music rec',
        href: 'music-rec',
      },
      {
        name: 'game rec',
        href: 'game-rec',
      },
      {
        name: 'anime rec',
        href: 'anime-rec',
      },
    ],
  },
];

export const videogames = [
  {
    id: 'expedition_33',
    rating: 5,
    cover: '/images/videogames/list/expedition33.webp',
    genre: [Genre.RPG, Genre.TURN_BASED],
    year: 2025,
  },
  {
    id: 'balatro',
    rating: 4.5,
    cover: '/images/videogames/list/balatro.webp',
    genre: [Genre.DECK_BUILDING, Genre.ROGUELITE],
    year: 2024,
  },
  {
    id: 'mewgenics',
    rating: 5,
    cover: '/images/videogames/list/mewgenics.webp',
    genre: [Genre.ROGUELIKE, Genre.ROGUELITE],
    year: 2026,
  },
  {
    id: 'hollow_knight',
    rating: 5,
    cover: '/images/videogames/list/hollow_knight.webp',
    genre: [Genre.METROIDVANIA],
    year: 2017,
  },
];

export const policies = {
  privacy: 'https://www.iubenda.com/',
  cookies: 'https://www.iubenda.com/',
};
