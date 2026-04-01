'use server';

import { getlanguage } from '@/lib/actions';
import { LangToggle } from '@/ui';

export default async function Toggles() {
  const lang = await getlanguage();
  return (
    <div className="relative float-right">
      {/* Qui farò i toggle per dark mode, lingua e suoni */}
      <LangToggle language={lang} />
    </div>
  );
}
