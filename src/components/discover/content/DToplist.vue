<template>
  <TitleCard :title="'榜单'"></TitleCard>
  <div class="na_container">
    <div class="songs-list" v-for="i, index in 3" :key="index">
      <ListCard :songs_list=songs_list[index]></ListCard>
    </div>
  </div>
</template>

<script setup lang='ts'>
import ListCard from '@/components/cards/ListCard.vue';
import TitleCard from '@/components/cards/TitleCard.vue';

import { useSongsList } from '@/stores/songsList';

const songs_list = useSongsList().songs_list
</script>

<style lang='scss' scoped>
.na_container {
  width: 690px;
  background-image: url('/src/assets/10019.png');
  display: flex;

}
</style>
