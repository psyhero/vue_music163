<template>
  <div class="al-container">
    <img src="/src/assets/10014.png" alt="">
    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
    <button>用户登录</button>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
@import '/src/assets/main';

.al-container {
  width: 250px;
  box-sizing: border-box;
  background: #eee;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;


  img {
    width: 100%;
    height: 100%;
    margin: 5px 0 0 0;
  }

  p {
    color: #666;
    font-size: 12px;
    padding: 0 20px;
    margin: 20px 0;
  }

  button {
    width: 100px;
    height: 30px;
    color: #fff;
    font-size: 13px;
    margin-bottom: 20px;
    background: $main-color;
    border: 0;
    border-radius: 4px;
  }
}
</style>
