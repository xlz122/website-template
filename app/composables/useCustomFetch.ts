import type { UseFetchOptions } from 'nuxt/app';

function useCustomFetch<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$customFetch,
  });
}

export default useCustomFetch;
