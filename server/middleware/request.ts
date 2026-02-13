export default defineEventHandler((event) => {
  const cookies = parseCookies(event);
  const runtimeConfig = useRuntimeConfig();

  event.context.baseURL = runtimeConfig.baseURL;
  event.context.headers = {
    language: cookies.i18n_redirected,
  };
});
