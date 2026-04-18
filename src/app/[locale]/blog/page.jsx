import { useTranslations } from 'next-intl';

export default function Blog() {
  const t = useTranslations('sidebar');
  return (
    <section className="min-w-full flex flex-col h-full bg-primary/75 items-center">
      <p className='text-5xl'>{t('navigation.blog')}</p>
    </section>
  );
}
