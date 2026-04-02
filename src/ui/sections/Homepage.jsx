import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Homepage() {
  const t = useTranslations('homepage.sections');
  return (
    <section className="min-w-full flex flex-col h-full bg-primary/90 backdrop-blur-sm border-t border-b border-r rounded-r-2xl border-secondary p-4">
      <div className="flex flex-col text-secondary gap-8 border-secondary-strong p-4 rounded-2xl">
        <h4 className="font-bold text-3xl">{t('first.title')}</h4>
        <p className="text-xl leading-5">
          {t('first.dsc')}
          <br />
          <br />
          <span className='text-secondary-strong font-semibold'>{t('first.expectations.question')}</span>
          <br />
          {t('first.expectations.answer')}
        </p>
        <span className="leading-5 text-xl">
          {t('first.shotout.text1')}
          <Link
            href={'https://neocities.org/'}
            className="inline-block font-bold underline text-contrast-green underline-offset-2 animate-custom-pulse">
            neocities
          </Link>
          {t('first.shotout.text2')}
          <Link
            href={'https://indieweb.org/'}
            className="inline-block font-bold underline text-contrast-green underline-offset-2 animate-custom-pulse">
            indie web
          </Link>
          {t('first.shotout.text3')}
        </span>
      </div>
      <div className="h-1 w-full bg-contrast-yellow mt-4" />
      <div className="h-1 w-full bg-contrast-green mt-4" />
    </section>
  );
}
