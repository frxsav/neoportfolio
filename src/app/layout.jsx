import { Footer, Header, BgImage, Toggles } from '@/ui';
import './globals.css';
import GoogleAnalytics from '@/ui/components/GoogleAnalytics';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';

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
        className={`${euxoi.variable} ${pokemon.variable} tracking-pokemon font-pokemon`}>
        <BgImage />
        <GoogleAnalytics />
        <Toggles />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
