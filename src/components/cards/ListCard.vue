<template>
  <div class="lc_container">
    <div class="top">
      <img :src="songs_list.songs_list.pic" alt="">
      <div class="right">
        <p class="title">{{ songs_list.songs_list.name }}</p>
        <div class="btns">
          <div class="icons btn1"></div>
          <div class="icons btn2"></div>
        </div>
      </div>
    </div>
    <div class="content" v-for="it in songs_list.songs_list.songs" :key="it.id">
      <span class="index">{{ it.id }}</span>
      <span class="name">{{ it.name }}</span>
    </div>
    <a href="" class="show-all">查看全部&gt;</a>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';

const songs_list = defineProps(['songs_list'])
</script>

<style lang='scss' scoped>
.lc_container {
  width: 230px;
  box-sizing: border-box;
  padding: 20px 20px 0 20px;

  .top {
    width: 230px;
    height: 120;
    margin-bottom: 22px;
    display: flex;

    img {
      width: 80px;
      height: 80px;
      margin-right: 10px;
    }

    .right {
      .title {
        font-size: 15px;
      }

      .btns {
        display: flex;

        .icons {
          width: 22px;
          height: 22px;
          margin: -5px 10px 0 0;
          background-image: url('/src/assets/10020.png');
        }

        .btn1 {
          background-position: -267px -205px;
        }

        .btn2 {
          background-position: -300px -205px;
        }

      }
    }
  }

  .content {
    margin-bottom: 8px;

    .index {
      font-size: 15px;
      margin: 0 10px 0 10px;
    }

    .name {
      font-size: 13px;
    }

  }

  .show-all {
    line-height: 30px;
    color: #000;
    font-size: 12px;
    text-decoration: none;
    margin: 0 0 0 135px;
  }
}
</style>
