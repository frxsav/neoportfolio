import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { blinkies } from '@/lib/data';

export default function Homepage() {
  const t = useTranslations('homepage.sections');
  return (
    <section className="min-w-full flex flex-col h-full bg-primary/75 backdrop-blur-md p-4 rounded-xl border border-secondary/50">
      <div className="flex flex-col text-secondary gap-8 p-4 rounded-2xl">
        <h1 className="font-bold text-4xl">{t('first.title')}</h1>
        <p className="text-2xl leading-6">
          {t('first.presentation')}
          <span className="text-3xl text-sky-400 uppercase text-shadow-xs text-shadow-secondary">
            Napoli
          </span>
          .
        </p>
        <p className="text-2xl leading-6">
          {t('first.dsc')}
          <Link
            href={'https://neocities.org/'}
            className="inline-block text-green text-shadow-secondary/70 text-shadow-xs underline decoration-green hover:scale-[1.1] px-1 transition-all duration-300">
            Neocities
          </Link>
          /
          <Link
            href={'https://indieweb.org/'}
            className="inline-block text-green text-shadow-secondary/70 text-shadow-xs underline decoration-green hover:scale-[1.1] px-1 transition-all duration-300">
            indieWeb
          </Link>
          {t('first.dsc2')}
        </p>
        <div className="grid grid-cols-6 justify-items-center items-center">
          {blinkies.map((blinky, i) => (
            <Image
              width={88}
              height={31}
              src={blinky.src}
              alt={blinky.title}
              key={i}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-secondary-strong text-4xl">
            {t('first.expectations.question')}
          </span>
          <span className="text-2xl leading-6 ">
            {t('first.expectations.answer')}
          </span>
        </div>
      </div>
      <div className="h-1 w-full bg-yellow mt-4" />
      <div className="h-1 w-full bg-green mt-4" />
    </section>
  );
}
