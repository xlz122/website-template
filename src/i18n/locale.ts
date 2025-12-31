'use server';

import { cookies } from 'next/headers';
import { type Locale, defaultLocale } from '../i18n/config';

export async function getUserLocale() {
  return (await cookies()).get('locale')?.value ?? defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set('locale', locale);
}
