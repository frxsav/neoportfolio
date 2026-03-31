'use client';

import { setLanguage } from '@/lib/actions';

export default function Toggles() {
  return (
    <div className="relative float-right p-3 flex gap-4">
      {/* Qui farò i toggle per dark mode, lingua e suoni */}
      <button
        onClick={() => {
          setLanguage('it');
        }}
        className="bg-red-500/80 p-4 cursor-pointer">
        {' '}
        Italiano
      </button>
      <button
        onClick={() => setLanguage('en')}
        className="bg-red-500/80 p-4 cursor-pointer">
        {' '}
        English
      </button>
    </div>
  );
}
