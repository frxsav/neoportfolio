'use client';

import Image from 'next/image';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LangToggle(props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'it' ? 'en' : 'it';
    router.replace(pathname.replace(/^\/(en|it)/, '') || '/', {
      locale: nextLocale,
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer fixed left-[10%]">
      {locale === 'en' ? (
        <Image
          src={'/images/italy-flag.webp'}
          width={70}
          height={70}
          alt="Language toggler flag Italy"
        />
      ) : (
        <Image
          src={'/images/uk-flag.webp'}
          width={70}
          height={70}
          alt="Language toggler flag UK"
        />
      )}
    </button>
  );
}
