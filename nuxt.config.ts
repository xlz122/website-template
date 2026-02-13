export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
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
  postcss: {
    plugins: {
      'postcss-mobile-forever': {
        viewportWidth: 750,
        mobileUnit: 'vw',
        maxDisplayWidth: 750,
        propList: ['*'],
        selectorBlackList: [],
      },
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
