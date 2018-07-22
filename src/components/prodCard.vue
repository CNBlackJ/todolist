<template>
  <div class="prod-card">
    <div class="user-info">
      <div class="user-avatar-container">
        <img :src="avatarUrl" class="user-avatar">
      </div>
      <div class="user-name-container">
        <span class="user-name">
          {{userName}}
        </span>
        <span class="user-address">
          {{address}}
        </span>
      </div>
    </div>
    <div class="prod-img-container">
      <img :src="prodImg" class="prod-img">
    </div>
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
        address: '广东广州',
        prodImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532177589335&di=de1c9db862e7f609a58e60d1cc31cd51&imgtype=0&src=http%3A%2F%2Fp1.music.126.net%2FhwyKpK8cPuPtVsRSqGczLA%3D%3D%2F109951163327562467.jpg',
        prodName: '美国进口猫粮',
        price: 99.99,
        sales: 999
      }
    }
  }
</script>

<style>
  .prod-card {
    background-color: #FFFFFF;
    border-radius: 8px;
    font-size: 14px;
    font-family: -apple-system;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 220px;
  }

  .prod-img-container {
    height: 120px;
  }

  .prod-img {
    width: 100%;
    height: 100%;
  }

  .user-info {
    display: flex;
		flex-direction: row;
  }

  .user-avatar-container {
    padding: 3px;
  }

  .user-avatar {
    width: 35px;
    height: 35px;
    border-radius: 100%;
  }

  .user-name-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .user-name {
    color: black;
    font-size: 14px;
  }
  
  .user-address {
    color: #bdbaba;
  }

</style>