<template>
  <HomeNav></HomeNav>
  <RouterView></RouterView>
  <HomeFooter></HomeFooter>
  <div>

  </div>
</template>

<script setup lang='ts'>
import { RouterView } from 'vue-router';
import HomeNav from './components/HomeNav.vue';
import HomeFooter from './components/HomeFooter.vue';
</script>

<style lang='scss' scoped></style>
