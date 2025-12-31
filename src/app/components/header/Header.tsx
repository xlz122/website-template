'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useT } from '@/app/i18n/client';
import styles from './header.module.css';

function Header(): React.ReactElement {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { i18n } = useT();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);

    const pathSegments = pathname.split('/').slice(2).filter(Boolean).join('/');
    router.replace(`/${value}/${pathSegments}?${searchParams}`);
  };

  return (
    <div className={styles.header__box}>
      <p>当前语言: {i18n.language}</p>
      <button onClick={() => handleLanguageChange('zh-CN')}>简体中文</button>
      <button onClick={() => handleLanguageChange('zh-TW')}>繁体中文</button>
      <button onClick={() => handleLanguageChange('en-US')}>英文</button>
    </div>
  );
}

export default Header;
