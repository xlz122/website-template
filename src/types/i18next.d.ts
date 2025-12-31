import 'i18next';
import zhCN from '@/i18n/locales/zh-CN';

declare module 'i18next' {
  interface CustomTypeOptions {
    enableSelector: true;
    resources: typeof zhCN;
  }
}
