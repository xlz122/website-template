'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import type { Namespace, FlatNamespace, KeyPrefix } from 'i18next';
import { useTranslation } from 'react-i18next';
import type { UseTranslationOptions, FallbackNs } from 'react-i18next';
import i18next from './i18next';

type $Tuple<T> = readonly [T?, ...T[]];
type $FirstNamespace<Ns extends Namespace> = Ns extends readonly unknown[] ? Ns[0] : Ns;

const runsOnServerSide = typeof window === 'undefined';

export function useT<
  Ns extends FlatNamespace | $Tuple<FlatNamespace>,
  KPrefix extends KeyPrefix<FallbackNs<Ns extends FlatNamespace ? FlatNamespace : $FirstNamespace<FlatNamespace>>> = undefined
>(
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
) {
  const lng = useParams()?.lng;
  if (typeof lng !== 'string') throw new Error('useT is only available inside /app/[lng]');
  if (runsOnServerSide && i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng);
  } else {
    const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);

    useEffect(() => {
      if (activeLng === i18next.resolvedLanguage) return;
      setActiveLng(i18next.resolvedLanguage);
    }, [activeLng, i18next.resolvedLanguage]);

    useEffect(() => {
      if (!lng || i18next.resolvedLanguage === lng) return;
      i18next.changeLanguage(lng);
    }, [lng, i18next]);
  }

  return useTranslation(ns, options);
}
