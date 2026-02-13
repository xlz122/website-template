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
        { rel: 'stylesheet', type: 'text/css', href: '/styles/global.css' },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/PingFang-Medium.woff2',
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
    baseURL: 'http://localhost:9006',
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
        proxy: 'http://localhost:9006/**',
      },
    },
  },
});
