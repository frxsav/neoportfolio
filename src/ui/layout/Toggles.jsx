'use server';

import { getlanguage } from '@/lib/actions';
import { LangToggle, ThemeToggle } from '@/ui';

export default async function Toggles() {
  const lang = await getlanguage();
  return (
    <div className="fixed top-[2%] z-20">
      {/* Qui farò i toggle per dark mode, lingua e suoni */}
      <LangToggle language={lang} />
      <ThemeToggle />
    </div>
  );
}
