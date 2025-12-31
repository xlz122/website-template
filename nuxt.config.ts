export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
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
