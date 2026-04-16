import { Footer, Toggles, Sidebar, SideInfo, BgCover } from '@/ui';
import './globals.css';
import GoogleAnalytics from '@/ui/components/GoogleAnalytics';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

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
        className={`${euxoi.variable} ${pokemon.variable} tracking-pokemon font-pokemon bg-[url('/images/omori_wallpaper.webp')] py-[2%] px-[15%] bg-contain bg-fixed bg-center`}>
        <ThemeProvider attribute={'class'}>
          <BgCover />
          <GoogleAnalytics />
          <Toggles />
          <div className="grid grid-cols-12 border border-secondary-strong/50 relative z-20">
            <Sidebar />
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
            {/* <SideInfo /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
