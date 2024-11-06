<template>
  <div class="ft-container">
    <div class="icon-container">
      <a href="">
        <div class="sprit icon1"></div>
        <p class="title">音乐开放平台</p>
      </a>
      <a href="">
        <div class="sprit icon2"></div>
        <p class="title">云村交易所</p>
      </a>
      <a href="">
        <div class="sprit icon3"></div>
        <p class="title">X StudioAI歌手</p>
      </a>
      <a href="">
        <div class="sprit icon4"></div>
        <p class="title">用户认证</p>
      </a>
      <a href="">
        <div class="sprit icon5"></div>
        <p class="title">AI免费写歌</p>
      </a>
      <a href="">
        <div class="sprit icon6"></div>
        <p class="title">云推歌</p>
      </a>
      <a href="">
        <div class="sprit icon7"></div>
        <p class="title">赞赏</p>
      </a>
    </div>
    <div class="footer">
      <div class="title">
        <a href="">服务条款&emsp;|</a>
        <a href="">隐私政策&emsp;|</a>
        <a href="">儿童隐私政策&emsp;|</a>
        <a href="">版权投诉&emsp;|</a>
        <a href="">投资者关系&emsp;|</a>
        <a href="">广告合作&emsp;|</a>
        <a href="">联系我们</a>
      </div>
      <div class="report">
        <a href="">廉政举报</a>
        <p>不良信息举报邮箱: 51jubao@service.netease.com</p>
        <p>客服热线：95163298</p>
      </div>
      <div class="limit">
        <p>互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198</p>
        <a href="">粤B2-20090191-18 工业和信息化部备案管理系统网站</a>
      </div>
      <div class="copyright">
        <p>网易公司版权所有©1997-2024</p>
        <p>杭州乐读科技有限公司运营：</p>
        <a href="">浙网文[2024] 0900-042号</a>
        <div class="police">
          <img src="/src/assets/10086.png" alt="">
          <a href="">浙公网安备 33010802013307号 </a>
        </div>
        <a href="">算法服务公示信息</a>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.ft-container {
  width: 100%;
  border: 1px solid #ddd;

  .icon-container {
    width: 900px;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-evenly;

    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      .sprit {
        width: 50px;
        height: 50px;
        background-image: url('/src/assets/10082.png');
        background-repeat: no-repeat;
        background-size: 480%;
      }

      .icon1 {
        background-position: -185px -5px;
      }

      .icon1:hover {
        background-position: -5px -125px;
      }

      .icon2 {
        background-position: -5px -185px;
      }

      .icon2:hover {
        background-position: -65px -185px;
      }

      .icon3 {
        background-image: url('/src/assets/10083.png');
        background-size: 100%;
      }

      .icon4 {
        background-position: -65px -65px;
      }

      .icon4:hover {
        background-position: -125px -5px;
      }

      .icon5 {
        background-image: url('/src/assets/10085.png');
        background-size: 100%;
      }

      .icon5:hover {
        background-image: url('/src/assets/10117.png');
      }

      .icon6 {
        background-image: url('/src/assets/10084.png');
        background-size: 100%;
      }

      .icon7 {
        background-position: -185px -125px;
      }

      .icon7:hover {
        background-position: -65px -125px;
      }

      .title {
        color: #666;
        font-size: 12px;
      }
    }
  }

  .footer {
    margin: 40px 0 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    a,
    p {
      color: #666;
      font-size: 12px;
      text-decoration: none;
      margin: 10px 0 0 10px;
      display: inline-block;
    }

    a:hover {
      text-decoration: underline;
    }

    .report {
      display: flex;
    }


    .copyright {
      display: flex;

      .police {
        img {
          width: 15px;
          height: 15px;
          margin-left: 10px;
        }

        a {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
