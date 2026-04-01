'use server';

import { getlanguage } from '@/lib/actions';
import { LangToggle, ThemeToggle } from '@/ui';

export default async function Toggles() {
  const lang = await getlanguage();
  return (
    <div className="fixed top-5 right-5 flex items-center">
      {/* Qui farò i toggle per dark mode, lingua e suoni */}
      <LangToggle language={lang} />
      <ThemeToggle />
    </div>
  );
}
