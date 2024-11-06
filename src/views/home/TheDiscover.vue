<template>
  <div class="bg">
    <div class="container">
      <ANav></ANav>
      <BBanner></BBanner>
      <CContent></CContent>
    </div>
  </div>
</template>

<script setup lang='ts'>
import ANav from '@/components/discover/ANav.vue';
import BBanner from '@/components/discover/BBanner.vue';
import CContent from '@/components/discover/CContent.vue';

</script>

<style lang='scss' scoped>
.container {
  width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

}
</style>
