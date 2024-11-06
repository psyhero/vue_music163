<template>
  <div class="user_card">
    <a href="">
      <div class="sprit icon1"></div>
      <span>我的主页</span>
    </a>
    <a href="">
      <div class="sprit icon2"></div>
      <span>我的消息</span>
    </a>
    <a href="">
      <div class="sprit icon3"></div>
      <span>我的等级</span>
    </a>
    <a href="">
      <div class="sprit icon4"></div>
      <span>VIP会员</span>
    </a>
    <a href="">
      <div class="sprit icon5"></div>
      <span>个人设置</span>
    </a>
    <a href="">
      <div class="sprit icon6"></div>
      <span>实名认证</span>
    </a>
    <a href="">
      <div class="sprit icon7"></div>
      <span>退出</span>
    </a>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.user_card {
  width: 100px;
  background: #333;
  border-radius: 4px;
  border: 1px solid #000;
  padding: 20px;
  display: flex;
  flex-direction: column;

  a {
    margin: 5px 0;
    text-decoration: none;
    display: flex;

    .sprit {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      background-image: url('/src/assets/10002.png');
    }

    .icon1 {
      background-position: 0 -80px;
    }

    .icon2 {
      background-position: -20px -120px;
    }

    .icon3 {
      background-position: 0 -100px;
    }

    .icon4 {
      background-position: 0 -220px;
    }

    .icon5 {
      background-position: 0 -140px;
    }

    .icon6 {
      background-position: -20px -140px;
    }

    .icon7 {
      background-position: 0 -200px;
    }

    span {
      font-size: 13px;
      color: #bbb;
      text-decoration: none;
    }
  }


}
</style>
