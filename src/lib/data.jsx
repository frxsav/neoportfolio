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
    name: 'media',
    href: '/media',
    items: [
      {
        name: 'music',
        href: 'music',
        icon: '/gifs/mp3.gif',
      },
      {
        name: 'videogames',
        href: 'videogames',
        icon: '/gifs/ps1.gif',
      },
      {
        name: 'anime',
        href: 'anime',
        icon: '/gifs/totoro.gif',
      },
      {
        name: 'manga',
        href: 'manga',
        icon: '/gifs/book.gif',
      },
      {
        name: 'youtube_channels',
        href: 'youtube-channels',
        icon: '/gifs/tv.gif',
      },
    ],
  },
];

export const blinkies = [
  {
    title: 'Responsive blinky',
    src: '/images/blinkies/blinky1.png',
  },
  {
    title: 'Visual Studio blinky',
    src: '/images/blinkies/blinky2.png',
  },
  {
    title: 'Trick or treat blinky',
    src: '/images/blinkies/blinky3.gif',
  },
  {
    title: 'Pirate blinky',
    src: '/images/blinkies/blinky4.gif',
  },
  {
    title: 'Responsive blinky',
    src: '/images/blinkies/blinky5.png',
  },
  {
    title: 'blinky',
    src: '/images/blinkies/blinky6.png',
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
