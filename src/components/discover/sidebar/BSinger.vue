<template>
  <div class="sc-container">
    <div class="top">
      <span>入驻歌手</span>
      <a href="">查看全部&gt;</a>
    </div>
    <hr>
    <div class="singer" v-for="it, index in singer_len" :key="it">
      <SingerCard :singer_list="singer_list[index]"></SingerCard>
    </div>
    <button class="apply">申请成为网易音乐人</button>
  </div>
</template>

<script setup lang='ts'>
import SingerCard from '@/components/cards/SingerCard.vue';

import { useSingerList } from '@/stores/singer';

const singer_len = useSingerList().singer_len
const singer_list = useSingerList().singer_list

</script>

<style lang='scss' scoped>
.sc-container {
  padding: 20px;

  .top {
    display: flex;
    justify-content: space-between;

    span {
      color: #333;
      font-size: 12px;
      font-weight: bold;
    }

    a {
      color: #666;
      font-size: 12px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  hr {
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    height: 30px;
    color: #333;
    font-size: 12px;
    font-weight: bold;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ccc;
    background: #efefef;
  }
}
</style>
