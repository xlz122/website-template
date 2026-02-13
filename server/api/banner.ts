export default defineEventHandler(async (event) => {
  const response = await $fetch('/banner', {
    baseURL: event.context.baseURL,
    headers: event.context.headers,
  });

  return response;
});
