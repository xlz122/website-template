import React from 'react';
import { useTranslation } from 'react-i18next';

function Header(): React.ReactElement {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: typeof i18n.language) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="header__box">
      <p>当前语言: {i18n.language}</p>
      <button onClick={() => handleLanguageChange('zh-CN')}>简体中文</button>
      <button onClick={() => handleLanguageChange('zh-TW')}>繁体中文</button>
      <button onClick={() => handleLanguageChange('en-US')}>英文</button>
    </div>
  );
}

export default Header;
