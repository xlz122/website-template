export default defineNuxtPlugin({
  name: 'vue-i18n-cookie',
  dependsOn: ['i18n:plugin'],
  async setup(nuxtApp) {
    const i18n = nuxtApp.vueApp.$nuxt.$i18n;
    const cookie = i18n.getLocaleCookie();

    if (!cookie) {
      // i18n.setLocaleCookie(i18n.defaultLocale);
    }
  },
});
