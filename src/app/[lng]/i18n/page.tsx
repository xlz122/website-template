import React from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';
import { getT } from '@/app/i18n/index';
import I18nClient from './client';
import styles from './page.module.css';

async function I18n(): Promise<React.ReactElement> {
  const { t } = await getT('common');

  return (
    <div className={styles.page}>
      <p>I18n Page</p>

      <p>{t(($) => $.welcome, { version: '16' })}</p>
      <p>{t(($) => $.welcome, { ns: 'common', version: '16' })}</p>
      {/* 数组 */}
      <ul>
        {t(($) => $.fruits, { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{t(($) => $.fruits, { returnObjects: true })[0]}</p>
      {/* 数组对象 */}
      <ul>
        {t(($) => $.students, { returnObjects: true }).map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <span>{item.gender}</span>
          </li>
        ))}
      </ul>
      <p>{t(($) => $.students, { returnObjects: true })[0]?.name}</p>
      {/* Trans组件 */}
      <Trans t={t} ns="common">
        <p>{t(($) => $.welcome, { version: '16' })}</p>
      </Trans>
      <Trans t={t} i18nKey={($) => $.welcome} values={{ version: '16' }} />

      <I18nClient />
    </div>
  );
}

export default I18n;
