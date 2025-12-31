<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: 'InterRegular';
  src: url('/fonts/Inter-Regular.woff2') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'InterSemiBold';
  src: url('/fonts/Inter-SemiBold.woff2') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

* {
  padding: 0;
  margin: 0;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

.text-ellipsis-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
