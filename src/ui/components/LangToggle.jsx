'use client';

import { setLanguage } from '@/lib/actions';
import Image from 'next/image';

export default function LangToggle(props) {
  return (
    <button
      onClick={() => {
        setLanguage(props.language === 'it' ? 'en' : 'it');
      }}
      className="cursor-pointer">
            {props.language === 'en' ? (
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
