<template>
  <div class="banner">
    <div class="sprit left" @click="banner_store.prev"></div>
    <div class="content">
      <div class="banner_box">
        <!-- <div class="index" v-for="it in banner_store.ban_len" :key="it">
          <div></div>
        </div> -->
        <img :src="banner_store.ban_src" alt="banner">
      </div>
      <div class="download" @mouseenter="show" @mouseleave="hide">
        <div v-show="isshow"></div>
      </div>
    </div>
    <div class="sprit right" @click="banner_store.next"></div>
  </div>
</template>

<script setup lang='ts'>
import { bannerStore } from '@/stores/banner';
import { ref } from 'vue';

const isshow = ref(false)
const show = () => isshow.value = true
const hide = () => isshow.value = false

const banner_store = bannerStore()

</script>

<style lang='scss' scoped>
.banner {
  width: 1120px;
  height: 284px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sprit {
    width: 37px;
    height: 63px;
    background-image: url('/src/assets/10017.png');
    cursor: pointer;
  }

  .left {
    background-position: 0 -360px;
  }

  .left:hover {
    background-position: 0 -430px;
  }

  .right {
    background-position: 0 -508px;
  }

  .right:hover {
    background-position: 0 -578px;
  }

  .content {
    margin: 5px 0 0 0;
    display: flex;

    .banner_box {
      overflow: hidden;

      // .index {
      //   width: 730;
      //   display: flex;

      //   div {
      //     width: 8px;
      //     height: 8px;
      //     border-radius: 4px;
      //     background: red;
      //     margin: 0 10px;
      //     // position: fixed;
      //   }
      // }

      img {
        width: 730px;
        height: 284px;
      }
    }

    .download {
      width: 250px;
      height: 284px;
      background-image: url('/src/assets/10016.png');
      display: flex;
      justify-content: center;

      div {
        width: 215px;
        height: 58px;
        margin-top: 184px;
        margin-left: 3px;
        background: rgba($color: #000000, $alpha: 0.1);
      }
    }
  }

}
</style>
