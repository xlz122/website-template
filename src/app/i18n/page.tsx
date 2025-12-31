import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';

function I18n(): React.ReactElement {
  const t = useTranslations('common');

  return (
    <div className={styles.page}>
      <p>I18n Page</p>

      <p>{t('welcome', { version: '16' })}</p>
    </div>
  );
}

export default I18n;
