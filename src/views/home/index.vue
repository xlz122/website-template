<template>
  <div class="home">
    <p>Home Page</p>
    <router-link to="/about">Jump To About Page</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { login } from '@/api/user';
import type { ResponseType } from '@/types';

const response = ref({});

const getResponse = async () => {
  const res: ResponseType = await login({ account: 'xlz122', password: '123456' });
  if (res?.code !== 200) {
    return;
  }

  response.value = res.data ?? {};
};
getResponse();
</script>

<style lang="scss" scoped></style>
