<template>
  <div class="recommend">
    <div class="nav">
      <div class="left">
        <div class="first">
          <div></div>
          <span>热门推荐</span>
        </div>
        <span>华语</span>
        <span>|</span>
        <span>流行</span>
        <span>|</span>
        <span>摇滚</span>
        <span>|</span>
        <span>民谣</span>
        <span>|</span>
        <span>电子</span>
      </div>
      <div class="more">
        <span>更多</span>
        <div></div>
      </div>
    </div>
    <hr>
    <div class="content">
      <div v-for="it in songs.songlist" :key="it.id">
        <SongCard :songs="it"></SongCard>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SongCard from '@/components/cards/SongCard.vue';
import { useSongStore } from '@/stores/hotsongs';

const songs = useSongStore()
</script>

<style lang='scss' scoped>
.recommend {

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: end;

      .first {
        display: flex;
        align-items: center;

        div {
          width: 20px;
          height: 20px;
          background-image: url('/src/assets/10020.png');
          background-position: -230px -160px;
        }

        span {
          color: #000;
          font-size: 18px;
          margin: 0 10px;
        }
      }

      span {
        color: #444;
        font-size: 12px;
        margin: 0 5px;
      }
    }

    .more {
      display: flex;
      align-items: center;

      span {
        color: #444;
        font-size: 12px;
      }

      div {
        width: 20px;
        height: 20px;
        background-image: url('/src/assets/10020.png');
        background-position: 2px -234px;
      }
    }
  }

  hr {
    height: 2px;
    border: 0;
    background: #c20c0c;
  }

  .content {
    width: 690px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      width: 150px;
      margin: 5px 0 20px 0;
    }
  }
}
</style>
