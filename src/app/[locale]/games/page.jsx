import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Games() {
  const t = useTranslations('games');
  return (
    <section className="min-w-full flex flex-col h-full bg-primary/75 items-center py-4 gap-4">
      <div className="flex items-center gap-2">
        <Image
          src={'/images/videogames/joypad.webp'}
          className="joypad"
          width={48}
          height={48}
          alt='Joypad'
        />
        <h1 className="text-3xl text-secondary">{t('title')}</h1>
        <Image
          src={'/images/videogames/joypad.webp'}
          className="joypad"
          width={48}
          height={48}
          alt='Joypad'
        />
      </div>
      <p className="text-2xl">{t('dsc')}</p>
    </section>
  );
}
