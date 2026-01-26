<template>
  <div class="header__box">
    <p>当前语言: {{ locale }}</p>
    <button @click="handleLocaleChange('zh-CN')">简体中文</button>
    <button @click="handleLocaleChange('zh-TW')">繁體中文</button>
    <button @click="handleLocaleChange('en-US')">English</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { MessageSchema, Locale } from '@/i18n';

const { locale } = useI18n<{ message: MessageSchema }, Locale>();

const handleLocaleChange = (value: typeof locale.value) => {
  locale.value = value;
  localStorage.setItem('locale', value);
};
</script>

<style scoped lang="scss"></style>
