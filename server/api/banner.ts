export default defineEventHandler(async (event) => {
  const response = await $fetch('/banner', {
    baseURL: event.context.baseURL,
    method: 'get',
  });

  return response;
});
