<template>
  <div class="dc_container">
    <div class="content">
      <AHotSong></AHotSong>
      <BPersonalRecommend></BPersonalRecommend>
      <div class="newalbum">
        <CNewAlbum></CNewAlbum>
      </div>
      <div class="toplist">
        <DToplist></DToplist>
      </div>
    </div>
    <div class="sidebar">
      <CSidebar></CSidebar>
    </div>

  </div>
</template>

<script setup lang='ts'>
import AHotSong from './content/AHotSong.vue';
import BPersonalRecommend from './content/BPersonalRecommend.vue';
import CNewAlbum from './content/CNewAlbum.vue';
import DToplist from './content/DToplist.vue';

import CSidebar from './DSidebar.vue';

</script>

<style lang='scss' scoped>
.dc_container {
  width: 980px;
  background: #fff;
  display: flex;
  flex-direction: row;

  .content {
    width: 730px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 20px;

    .newalbum {
      margin: 50px 0 0 0;
    }
  }

  .sidebar {
    width: 250px;
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>
