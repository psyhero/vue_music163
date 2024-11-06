<template>
  <div class="pr_container">
    <div class="nav">
      <div class="left">
        <div class="first">
          <div></div>
          <span>{{ title.title }}</span>
        </div>
      </div>
      <div class="more">
        <span>更多</span>
        <div></div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';

const title = defineProps(['title'])
</script>

<style lang='scss' scoped>
.pr_container {
  width: 690px;

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
          margin-left: 10px;
        }
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
}
</style>
