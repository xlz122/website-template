import 'i18next';
import type common from '../i18n/locales/zh-CN/common.json';

interface Resources {
  common: typeof common;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    enableSelector: true;
    resources: Resources;
  }
}
