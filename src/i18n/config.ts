export type Locale = (typeof locales)[number];

export const locales = ['zh-CN', 'zh-TW', 'en-US'] as const;
export const defaultLocale: Locale = 'zh-CN';
