<template>
  <div class="header__box">
    <p>当前语言: {{ locale }}</p>
    <template v-for="(item, index) in locales" :key="index">
      <button @click="handleLocaleChange(item.code)">{{ item.name }}</button>
    </template>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, locales } = useI18n();

const handleLocaleChange = (value: typeof locale.value) => {
  setLocale(value);
};
</script>

<style scoped lang="scss"></style>
