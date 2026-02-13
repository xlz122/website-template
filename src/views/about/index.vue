<template>
  <div class="about">
    <p>About Page</p>
    <router-link to="/">Jump To Home Page</router-link>

    <template v-for="(_, index) in Array(6).fill(null)" :key="index">
      <img
        v-lazyload="`https://picsum.photos/800/400?random=${index}`"
        alt=""
        style="width: 100%; height: 520px"
      />
    </template>

    <img v-lazyload="getImageUrl('/src/assets/images/avatar.png')" alt="" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getImageUrl } from '@/utils/utils';

const route = useRoute();

// 获取路由参数, 例如 /about/123, 可以通过 route.params.id 获取
// 获取搜索参数, 例如 /about?id=123, 可以通过 route.query.id 获取
console.log('Params:', route.params);
console.log('Search Params:', route.query);
</script>

<style scoped lang="scss"></style>
