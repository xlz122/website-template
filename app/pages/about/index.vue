<template>
  <div class="about">
    <p>About Page</p>
    <NuxtLink to="/">Jump To Home Page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

// 获取路由参数, 例如 /about/:id, 可以通过 route.params.id 获取
// 获取查询参数, 例如 /about?id=123, 可以通过 route.query.id 获取
console.log('Params:', route.params);
console.log('Search Params:', route.query);
</script>

<style scoped lang="scss"></style>
