<template>
  <div>
    <TitleCard :title="'个性化推荐'"></TitleCard>
    <div class="pr_content">
      <div class="today">
        <div class="box">
          <p class="day">星期天</p>
          <span>6</span>
        </div>
        <div class="title">
          <p class="ttl">每日歌曲推荐</p>
          <p class="intro">根据你的口味生成，每天6:00更新</p>
        </div>
      </div>
      <div v-for="song in songs.personal_songs" :key="song.id">
        <div class="card">
          <SongCard :songs="song"></SongCard>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import { useSongStore } from '@/stores/hotsongs';
import SongCard from '@/components/cards/SongCard.vue';
import TitleCard from '@/components/cards/TitleCard.vue';

const songs = useSongStore()
</script>

<style lang='scss' scoped>
.pr_content {
  width: 690px;
  display: flex;
  justify-content: space-between;

  .today {

    .box {
      width: 140px;
      height: 140px;
      background-image: url('/src/assets/10020.png');
      background-position: 153px 155px;
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      p.day {
        color: #ddd;
        font-size: 14px;
        margin-top: 5px;
      }

      span {
        color: #222;
        font-size: 90px;
        font-weight: bolder;
        margin-top: -28px;
      }

    }
  }

  .title {
    width: 150px;

    p.ttl {
      font-size: 14px;
      margin-top: 7px;
    }

    p.intro {
      color: #333;
      font-size: 12px;
      margin-top: -14px;
    }
  }
}

.card {
  margin-top: 15px;
}
</style>
