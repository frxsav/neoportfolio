import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  return (
    <section className='min-w-full flex flex-col justify-center'>
      <div className="min-h-screen flex items-center justify-center bg-secondary-light/50">
        <p className="text-5xl text-shadow-sm text-white">
          {t('homepage.title')}
        </p>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-secondary-light/50">
        <p className="text-5xl text-shadow-sm text-white">
          Testo di prova 2
        </p>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-secondary-light/50">
        <p className="text-5xl text-shadow-sm text-white">
          Testo di prova 3
        </p>
      </div>
    </section>
  );
}
