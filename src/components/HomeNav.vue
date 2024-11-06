<template>
  <div class="nav_box">
    <div class="container">
      <div class="logo" @click="home"></div>
      <RouterLink to="/">发现音乐</RouterLink>
      <RouterLink to="/my">我的音乐</RouterLink>
      <RouterLink to="/follow">关注</RouterLink>
      <RouterLink to="/mall">商城</RouterLink>
      <RouterLink to="/musician">音乐人</RouterLink>
      <RouterLink to="/adsong">云推歌</RouterLink>
      <RouterLink to="/download">下载客户端</RouterLink>
      <div class="search">
        <button></button>
        <input type="text" placeholder="音乐/视频/电台/用户">
      </div>
      <button class="creater">创作者中心</button>
      <div class="user" @mouseenter="show" @mouseleave="hide">
        <img src="../assets/10047.jpg" alt="">
        <div class="msg">
          <span>1</span>
        </div>
        <div class="user-card" v-show="isshow" @mouseenter="show" @mouseleave="hide">
          <UserCard></UserCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import router from '@/router';
import UserCard from './UserCard.vue';

const home = () => router.push('/')
const isshow = ref(false)
const show = () => isshow.value = true
const hide = () => isshow.value = false
</script>

<style lang='scss' scoped>
.nav_box {
  height: 70px;
  background: #242424;

  .container {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 176px;
      height: 70px;
      background-image: url('/src/assets/10003.png');
      cursor: pointer;

    }

    a {
      font-size: 14px;
      color: #ddd;
      text-decoration: none;
      height: 70px;
      line-height: 70px;
      padding: 0 20px;

      :visited {
        font-size: 14px;
        color: #ddd;
      }
    }

    a:hover,
    a.router-link-active {
      color: #fff;
      background: #000;
    }

    .search {
      display: flex;

      button {
        width: 30px;
        height: 32px;
        border: 0;
        background: #fff;
        background-image: url('/src/assets/10003.png');
        background-position: 0 -98px;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
      }

      input {
        width: 130px;
        height: 30px;
        font-size: 12px;
        border: 0;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;

        :focus {
          border: 0;
          outline: none;
        }
      }
    }

    .creater {
      width: 90px;
      height: 32px;
      border: 1px solid #4f4f4f;
      border-radius: 16px;
      color: #ccc;
      font-size: 12px;
      background: rgba($color: #000000, $alpha: 0);
      margin: 0 10px;
      padding: 0 8px;
    }

    .creater:hover {
      color: #fff;
      border-color: #fff;
    }

    .user {
      position: relative;
      display: flex;

      img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
      }

      .msg {
        width: 15px;
        height: 15px;
        border: 1px solid #000;
        border-radius: 8px;
        background: rgb(190, 0, 0);
        position: relative;
        top: -5px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          color: #fff;
          font-size: 12px;
        }
      }

      .user-card {
        position: absolute;
        top: 30px;
        left: -50px;
      }
    }
  }
}
</style>
