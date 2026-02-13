<template>
  <div class="home">
    <p>Home Page</p>
    <NuxtLink to="/about">Jump To About Page</NuxtLink>
    <NuxtLink to="/breakpoints">Jump To Breakpoints Page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { ResponseType } from '@/types';

const response = ref({});

const { data, error } = await useCustomFetch<ResponseType>('/api');

watchEffect(() => {
  if (error.value) {
    console.log('Error fetching:', error.value);
    return;
  }

  response.value = data.value ?? {};
});

// const { data, error } = await useFetch<ResponseType>('/api/banner');

// watchEffect(() => {
//   if (error.value) {
//     console.log('Error fetching:', error.value);
//     return;
//   }

//   response.value = data.value ?? {};
// });
</script>

<style scoped lang="scss"></style>
