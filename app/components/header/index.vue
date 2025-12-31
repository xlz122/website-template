<template>
  <div class="header__box">
    <p>当前语言: {{ locale }}</p>
    <button @click="handleLocaleChange('zh-CN')">简体中文</button>
    <button @click="handleLocaleChange('zh-TW')">繁體中文</button>
    <button @click="handleLocaleChange('en-US')">English</button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();

const handleLocaleChange = (value: typeof locale.value) => {
  setLocale(value);
};
</script>

<style lang="scss" scoped></style>
