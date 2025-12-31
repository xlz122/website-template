<template>
  <Header />
  <router-view v-slot="{ Component }">
    <component v-if="!$route.meta.keepAlive" :is="Component" />
    <keep-alive>
      <component v-if="$route.meta.keepAlive" :is="Component" />
    </keep-alive>
  </router-view>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
</script>
