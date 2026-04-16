'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      className="fixed right-[5%] p-2 cursor-pointer active:-translate-y-10 transition-all duration-300 -translate-y-15">
      {theme === 'dark' ? (
        <Image
          src={'/images/lampadina-omori-accesa.webp'}
          width={100}
          height={100}
          alt="Theme toggler image"
        />
      ) : (
        <Image
          src={'/images/lampadina-omori-spenta.webp'}
          width={100}
          height={100}
          alt="Theme toggler image"
        />
      )}
    </button>
  );
}
