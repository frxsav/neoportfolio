import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { videogames } from '@/lib/data';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

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
          alt="Joypad"
        />
        <h1 className="text-3xl text-secondary">{t('title')}</h1>
        <Image
          src={'/images/videogames/joypad.webp'}
          className="joypad"
          width={48}
          height={48}
          alt="Joypad"
        />
      </div>
      <p className="text-2xl">{t('dsc')}</p>
      <div className="grid grid-cols-2 gap-4 p-4">
        {videogames.map((item, i) => (
          <div
            key={i}
            className="bg-primary/30 backdrop-blur-xs border border-secondary/20 p-4 pb-16 relative">
            <Image
              src={item.cover}
              width={150}
              height={225}
              alt={t(`list.${item.id}.title`) + ' cover'}
              className="float-left object-cover mr-6 mt-2"
            />
            <h2 className="text-xl font-semibold pb-2">
              {t(`list.${item.id}.title`)}
            </h2>
            <div className="flex gap-2 mb-4 w-fit">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((i) =>
                i <= Math.floor(item.rating) ? (
                  <FaStar key={i} className="text-yellow" />
                ) : (
                  i === Math.ceil(item.rating) &&
                  item.rating % 1 === 0.5 && (
                    <FaStarHalf key={i} className="text-yellow" />
                  )
                ),
              )}
            </div>
            <p>{t(`list.${item.id}.dsc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
