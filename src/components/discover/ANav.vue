<template>
  <div class="nav">
    <div class="container">
      <RouterLink to="/discover">推荐</RouterLink>
      <RouterLink to="/discover/toplist">排行榜</RouterLink>
      <RouterLink to="/discover/playlist">歌单</RouterLink>
      <RouterLink to="/discover/djaudio">电台主播</RouterLink>
      <RouterLink to="/discover/artist">歌手</RouterLink>
      <RouterLink to="/discover/newalbum">新碟上架</RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang='ts'>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style lang='scss' scoped>
.nav {
  width: 100vw;
  height: 35px;
  background: #c20c0c;

  .container {
    width: 1100px;
    margin: 0 auto;
    padding-left: 270px;

    a {
      color: #eee;
      font-size: 12px;
      line-height: 35px;
      font-weight: 400;
      padding: 1px 15px;
      margin: 0 16px;
      text-decoration: none;

    }

    a.router-link-active,
    a:hover {
      border-radius: 12px;
      background: #9b0909;
    }
  }
}
</style>
