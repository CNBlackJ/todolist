<template>
  <div class="prod-card">
    <div class="user-info">
      <div class="">
        <img :src="avatarUrl" class="user-avatar">
      </div>
      <div class="user-name">
        <span>
          {{userName}}
        </span>
      </div>
    </div>
    <img :src="prodImg" class="prod-img">
    <div class="prod-info">
      <div class="prod-name">
        {{prodName}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        avatarUrl: 'https://avatars2.githubusercontent.com/u/21023227?s=460&v=4',
        userName: '北京的豪猪',
        address: '',
        prodImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532177589335&di=de1c9db862e7f609a58e60d1cc31cd51&imgtype=0&src=http%3A%2F%2Fp1.music.126.net%2FhwyKpK8cPuPtVsRSqGczLA%3D%3D%2F109951163327562467.jpg',
        prodName: '美国进口猫粮',
        price: 99.99,
        sales: 999
      }
    }
  }
</script>

<style>
  .col-6 {
    width: 50%;
    position: relative;
    display: block;
    box-sizing: border-box;
  }

  .prod-card {
    background-color: #FFFFFF;
    line-height: 20px;
    border-radius: 8px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: -apple-system;
  }

  .user-info {
    display: flex;
		flex-direction: row;
  }

  .user-avatar {
    left: 9px;
    top: 321px;
    width: 34px;
    height: 35px;
    border-radius: 18px;
  }

  .user-name {
    left: 50px;
    /* top: 327px; */
    width: 110px;
    height: 23px;
    line-height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: -apple-system;

  }

  .prod-img {

  }

  .prod-name {
    left: 13px;
    top: 483px;
    width: 71px;
    height: 23px;
    line-height: 17px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    text-align: center;
    font-family: -apple-system;
  }

</style>