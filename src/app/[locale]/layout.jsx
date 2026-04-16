import { Footer, Toggles, Sidebar, SideInfo, BgCover } from '@/ui';
import './globals.css';
import GoogleAnalytics from '@/ui/components/GoogleAnalytics';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const euxoi = localFont({
  src: [
    {
      path: '../../../public/fonts/euxoi.ttf',
      weight: '400',
      declarations: [{ prop: 'font-stretch', value: 'condensed' }],
    },
  ],
  variable: '--font-euxoi',
});
const pokemon = localFont({
  src: [
    {
      path: '../../../public/fonts/pokemon.ttf',
      weight: '400',
    },
  ],
  variable: '--font-pokemon',
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${euxoi.variable} ${pokemon.variable} tracking-pokemon font-pokemon bg-[url('/images/omori_wallpaper.webp')] py-[2%] px-[15%] bg-contain bg-fixed bg-center`}>
        <ThemeProvider attribute={'class'}>
          <BgCover />
          <GoogleAnalytics />
          <div className="grid grid-cols-12 border border-secondary-strong/75 relative z-20">
            <Sidebar />
            <NextIntlClientProvider>
              <Toggles />
              {children}
            </NextIntlClientProvider>
            {/* <SideInfo /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
