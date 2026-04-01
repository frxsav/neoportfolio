'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      className="p-2 cursor-pointer">
      <Image
        src={
          theme === 'dark'
            ? '/images/soul-eater-sun.webp'
            : '/images/soul-eater-moon.webp'
        }
        width={50}
        height={50}
        alt="Theme toggler image"
      />
    </button>
  );
}
