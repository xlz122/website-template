export default defineNuxtPlugin((nuxtApp) => {
  const i18n = nuxtApp.vueApp.$nuxt.$i18n;
  const runtimeConfig = useRuntimeConfig();

  const $customFetch = $fetch.create({
    baseURL: runtimeConfig.public.baseURL,
    onRequest({ options }) {
      options.headers.set('locale', i18n.locale.value);
    },
    onResponse() {},
    onResponseError() {},
  });

  return {
    provide: {
      customFetch: $customFetch,
    },
  };
});
