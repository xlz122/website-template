'use client';

import React from 'react';
import { useT } from '@/app/i18n/client';
import styles from './page.module.css';

function i18nClient(): React.ReactElement {
  const { t } = useT('common');

  return (
    <div className={styles.i18nClient}>
      <p>{t(($) => $.welcome, { version: '16' })}</p>
      <p>{t(($) => $.welcome, { ns: 'common', version: '16' })}</p>
    </div>
  );
}

export default i18nClient;
