<template>
  <TitleCard :title="'新碟上架'"></TitleCard>
  <div class="na_container">
    <button @click="changealbum1" class="left">&lt;</button>
    <div class="content">
      <div class="album" v-show="album_show" v-for="song in songs" :key="song.id">
        <div class="mask"></div>
        <div class="bg">
          <img :src="song.pic" alt="album">
        </div>
        <p class="title">{{ song.name }}</p>
        <p class="singer">{{ song.singer }}</p>
      </div>
      <div class="album2" v-show="album2_show" v-for="song in songs2" :key="song.id">
        <div class="mask"></div>
        <div class="bg">
          <img :src="song.pic" alt="album">
        </div>
        <p class="title">{{ song.name }}</p>
        <p class="singer">{{ song.singer }}</p>
      </div>
    </div>
    <button @click="changealbum2" class="right">&gt;</button>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import TitleCard from '@/components/cards/TitleCard.vue';
import { useSongStore } from '@/stores/hotsongs';

const songs = useSongStore().new_album.slice(0, 5)
const songs2 = useSongStore().new_album.slice(5, 10)

const album_show = ref(true)
const album2_show = ref(false)

const changealbum1 = () => {
  album_show.value = !album_show.value
  album2_show.value = !album2_show.value
}
const changealbum2 = () => {
  album_show.value = !album_show.value
  album2_show.value = !album2_show.value
}

</script>

<style lang='scss' scoped>
.na_container {
  width: 690px;
  box-sizing: border-box;
  border: 1px solid #999;
  background: #eee;
  margin-bottom: 40px;
  padding: 30px 0 20px 0;
  display: flex;
  justify-content: space-evenly;

  .left,
  .right {
    font-size: 18px;
    border: 0;
    background: rgba($color: #000000, $alpha: 0);
  }

  .content {
    width: 690px;
    position: relative;
    display: flex;
    justify-content: space-between;

    .mask {
      width: 118px;
      height: 100px;
      background-image: url('/src/assets/10146.png');
      background-position: 0 -570px;
      position: absolute;
    }

    .album,
    .album2 {
      width: 120px;

      .bg {
        img {
          width: 100px;
          height: 100px;
        }
      }


      .title {
        font-size: 12px;
        margin: 0;
      }

      .singer {
        font-size: 12px;
        color: #333;
        margin: 0;
      }
    }
  }
}
</style>
