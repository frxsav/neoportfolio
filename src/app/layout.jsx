import { Footer, Header } from '@/ui';
import './globals.css';
import GoogleAnalytics from '@/ui/components/GoogleAnalytics';
import CookiesProvider from '@/providers/CookiesProvider';
import localFont from 'next/font/local';

const euxoi = localFont({
  src: [
    {
      path: '../../public/fonts/euxoi.ttf',
      weight: '400',
      declarations: [{ prop: 'font-stretch', value: 'condensed' }],
    },
  ],
  variable: '--font-euxoi',
});
const pokemon = localFont({
  src: [
    {
      path: '../../public/fonts/pokemon.ttf',
      weight: '400',
    },
  ],
  variable: '--font-pokemon',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${euxoi.variable} ${pokemon.variable} tracking-pokemon`}>
        <GoogleAnalytics />
        <CookiesProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
