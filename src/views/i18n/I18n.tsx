import React from 'react';
import { Link } from 'react-router';
import { useTranslation, Trans } from 'react-i18next';

// 加载多个命名空间: useTranslation(['common', 'home'])
// ・ 数组的第一个可以不传ns, 默认使用第一个命名空间: 如 <p>{t(($) => $.title)}</p>
// ・ 数组的第二个开始需传ns, 如: <p>{t(($) => $.title, { ns: 'home' })}</p>

// 简化深层嵌套的键名: useTranslation('common', { keyPrefix: 'very.deeply.nested' })
// ・ 原始键名 very.deeply.nested.key, 简化后: t(($) => $.key)
//  "very": {
//    "deeply": {
//      "nested": {
//        "key": "here"
//      }
//    }
//  }

// 指定语言: useTranslation('common', { lng: 'zh' })
// ・ <p>{t(($) => $.title, { lng: 'zh-CN' })}</p>
// ・ <p>{t(($) => $.title, { lng: 'en-US' })}</p>

// 使用 Suspense 加载语言文件(默认值): useTranslation('common', { useSuspense: true })

// Translation 组件
// export function Component() {
//   return (
//     <Translation ns="common">
//       {
//         (t, { i18n }) => <p>{t(($) => $.title)}</p>
//       }
//     </Translation>
//   )
// }

function I18n(): React.ReactElement {
  const { t } = useTranslation('common');

  return (
    <div className="i18n">
      <p>I18n Page</p>
      <Link to="/">Jump To Home Page</Link>

      <p>{t(($) => $.welcome, { version: '19' })}</p>
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
        <p>{t(($) => $.welcome, { version: '19' })}</p>
      </Trans>
      <Trans t={t} i18nKey={($) => $.welcome} values={{ version: '19' }} />
    </div>
  );
}

export default I18n;
