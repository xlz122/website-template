export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  const $customFetch = $fetch.create({
    baseURL: runtimeConfig.public.baseURL,
    onRequest() {},
    onResponse() {},
    onResponseError() {},
  });

  return {
    provide: {
      customFetch: $customFetch,
    },
  };
});
