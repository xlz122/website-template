export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig();

  event.context.baseURL = runtimeConfig.baseURL;
});
