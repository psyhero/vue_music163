<template>
  <div class="ca-container">
    <p class="title">热门主播</p>
    <hr>
    <div class="content" v-for="it, index in anthor_len" :key="index">
      <SingerCard :singer_list="anthors[index]"></SingerCard>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SingerCard from '@/components/cards/SingerCard.vue';

import { useSingerList } from '@/stores/singer';

const anthor_len = useSingerList().anchor_len
const anthors = useSingerList().anchor_list

</script>

<style lang='scss' scoped>
.ca-container {
  padding: 20px;

  p.title {
    color: #333;
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
