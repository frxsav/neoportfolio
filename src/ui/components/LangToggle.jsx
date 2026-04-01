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
      <Image
        src={
          props.language === 'en'
            ? '/images/italy-flag.webp'
            : '/images/uk-flag.webp'
        }
        width={50}
        height={50}
        alt="Language toggler flag"
      />
    </button>
  );
}
