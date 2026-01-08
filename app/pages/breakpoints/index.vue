<template>
  <div class="breakpoints">
    <p>Breakpoints Page</p>
    <NuxtLink to="/">Jump To Home Page</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.breakpoints {
  @include maxResponseTo('2xl') {
    color: #f5222d;
  }

  @include maxResponseTo('xl') {
    color: #fa541c;
  }

  @include maxResponseTo('lg') {
    color: #fa8c16;
  }

  @include maxResponseTo('md') {
    color: #a0d911;
  }
}
</style>
