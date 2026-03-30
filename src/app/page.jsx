import { Hero } from '@/ui';

export const metadata = {
  title: 'Il mio sito web',
  description: 'Una bella descrizione per il mio sti web.',
  openGraph: {
    title: 'Il mio sito web',
    description: 'Descrizione sito web',
    images: [''],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'sitoweb.it',
    title: 'Il mio sito web',
    description: 'Una bella descrizione per il mio sti web.',
    image: '',
  },
  keywords: ['sito web', 'sito web prova'],
};

export default function Home() {
  return (
    <div>
      <main className="font-roboto">
        <Hero />
      </main>
    </div>
  );
}
