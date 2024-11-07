<template>
  <div>
    <ALogin></ALogin>
    <BSinger></BSinger>
    <CAnchor></CAnchor>
  </div>
</template>

<script setup lang='ts'>
import ALogin from './sidebar/ALogin.vue';
import BSinger from './sidebar/BSinger.vue';
import CAnchor from './sidebar/CAnchor.vue';

</script>

<style lang='scss' scoped>
div {
  border-right: 1px solid #ddd;
}
</style>
