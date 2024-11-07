<template>
  <div class="singer">
    <img :src="singer.singer_list.src" alt="">
    <div class="content">
      <p class="name">{{ singer.singer_list.name }}</p>
      <p class="intro">{{ singer.singer_list.intro }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';

const singer = defineProps(['singer_list'])

</script>

<style lang='scss' scoped>
.singer {
  border: 1px solid #e9e9e9;
  margin: 15px 0;
  display: flex;

  img {
    width: 60px;
    height: 60px;
  }

  .content {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      margin: 0;
    }

    p.name {
      color: #333;
      font-size: 14px;
      font-weight: bold;
    }

    p.intro {
      color: #666;
      font-size: 12px;
    }
  }
}
</style>
