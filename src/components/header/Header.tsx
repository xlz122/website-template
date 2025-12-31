'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import type { Locale } from '@/i18n/config';
import { setUserLocale } from '@/i18n/locale';
import styles from './header.module.css';

function Header(): React.ReactElement {
  const locale = useLocale();

  const handleLocaleChange = async (value: Locale) => {
    setUserLocale(value);
  };

  return (
    <div className={styles.header__box}>
      <p>当前语言: {locale}</p>
      <button onClick={() => handleLocaleChange('zh-CN')}>简体中文</button>
      <button onClick={() => handleLocaleChange('zh-TW')}>繁体中文</button>
      <button onClick={() => handleLocaleChange('en-US')}>英文</button>
    </div>
  );
}

export default Header;
