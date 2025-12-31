import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-CN';
import zhTW from './locales/zh-TW';
import enUS from './locales/en-US';

export type MessageSchema = typeof zhCN;
export type Locale = 'zh-CN' | 'zh-TW' | 'en-US';

const i18n = createI18n<[MessageSchema], Locale>({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en-US': enUS,
  },
});

export default i18n;
