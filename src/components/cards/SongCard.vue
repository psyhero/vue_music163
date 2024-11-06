<template>
  <div class="sc_card">
    <div class="content">
      <div class="pic">
        <div class="playbox">
          <div class="left">
            <div class="sprite icon1"></div>
            <span>{{ songs.songs.plays }}万</span>
          </div>
          <div class="sprite icon2"></div>
        </div>
        <div class="pic-mask"></div>
        <img class="song" :src="songs.songs.pic" alt="photo">
      </div>
      <div class="title">
        <button v-if="songs.songs.has_audio">电台节目</button>
        <span class="song">{{ songs.songs.title }}</span>
        <p v-if="songs.songs.showintro" class="intro">{{ songs.songs.intro }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';

const songs = defineProps(['songs'])
</script>

<style lang='scss' scoped>
.sc_card {

  .content {

    .pic {
      position: relative;

      .pic-mask {
        width: 140px;
        height: 140px;
        background-image: url('/src/assets/10146.png');
        background-position: 0 0;
        position: absolute;
      }

      img.song {
        width: 140px;
        height: 140px;
      }

      .playbox {
        width: 140px;
        height: 27px;
        background: rgba($color: #000000, $alpha: 0.5);
        position: absolute;
        top: 113px;
        display: flex;
        justify-content: space-between;
        align-items: center;



        .sprite {
          width: 20px;
          height: 20px;
          background-image: url('/src/assets/10007.png');
          background-repeat: no-repeat;
        }

        .left {
          display: flex;

          .icon1 {
            background-position: 0 -20px;
            margin-left: 10px;
          }

          span {
            color: #ccc;
            font-size: 12px;
          }
        }

        .icon2 {
          margin-right: 10px;
          background-position: 0 2px;
        }
      }
    }
  }

  .title {
    width: 150px;

    button {
      width: 50px;
      font-size: 10px;
      color: #c20c0c;
      border: 1px solid #c20c0c;
      background: #fff;
      border-radius: 4px;
      margin-right: 6px;
      padding: 0;
    }

    span {
      font-size: 14px;
    }

    p.intro {
      color: #333;
      font-size: 12px;
      margin-top: 0px;
    }
  }
}
</style>
