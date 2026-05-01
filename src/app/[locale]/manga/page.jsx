import { useTranslations } from 'next-intl';

export default function Manga() {
  const t = useTranslations('sidebar');
  return (
    <section className="min-w-full flex flex-col h-full bg-primary/75 items-center py-4 gap-4">
      <h1 className="text-3xl text-ctext">
        {t(`navigation.manga`)}
      </h1>
    </section>
  );
}
