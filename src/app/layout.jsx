import { Footer, Header } from '@/ui';
import './globals.css';
import { DM_Serif_Display, Roboto_Mono } from 'next/font/google';
import GoogleAnalytics from '@/ui/components/GoogleAnalytics';
import CookiesProvider from '@/providers/CookiesProvider';

const display = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});
const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${roboto.variable}`}>
        <GoogleAnalytics />
        <CookiesProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
