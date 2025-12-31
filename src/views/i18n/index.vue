<template>
  <div class="i18n">
    <p>I18n Page</p>

    <p>{{ t('common.welcome', { version: '3' }) }}</p>
    <!-- 数组 -->
    <ul>
      <template v-for="(item, index) in tm('common.fruits')" :key="index">
        <li>{{ item }}</li>
      </template>
    </ul>
    <p>{{ tm('common.fruits')[0] }}</p>
    <!-- 数组对象 -->
    <ul>
      <template v-for="(item, index) in tm('common.students')" :key="index">
        <li>
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
          <span>{{ item.gender }}</span>
        </li>
      </template>
    </ul>
    <p>{{ tm('common.students')[0]?.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { MessageSchema, Locale } from '@/i18n';

const { t, tm } = useI18n<{ message: MessageSchema }, Locale>();
</script>

<style lang="scss" scoped></style>
