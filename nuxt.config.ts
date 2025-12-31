export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'zh-CN',
    },
    defaultLocale: 'zh-CN',
    locales: [
      { code: 'zh-CN', name: '简体中文', file: 'zh-CN/index.ts' },
      { code: 'zh-TW', name: '繁體中文', file: 'zh-TW/index.ts' },
      { code: 'en-US', name: 'English', file: 'en-US/index.ts' },
    ],
  },
  app: {
    head: {
      title: 'website',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/Inter-Regular.woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/Inter-SemiBold.woff2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  runtimeConfig: {
    public: {
      baseURL: import.meta.env.NODE_ENV === 'development' ? '/dev-api' : '/prod-api',
    },
  },
  nitro: {
    routeRules: {
      '/dev-api/**': {
        proxy: 'http://localhost:9006/**',
      },
      '/prod-api/**': {
        proxy: 'http://127.0.0.1:9006/**',
      },
    },
  },
  spaLoadingTemplate: true,
});
