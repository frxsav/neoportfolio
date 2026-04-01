'use server';

import { cookies } from 'next/headers';

export async function setLanguage(lang) {
  const store = await cookies();
  store.set('locale', lang);
}

export async function getlanguage() {
  const store = await cookies();
  return store.get('locale')?.value;
}
