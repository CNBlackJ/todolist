<template>
  <div class="prod-card">
    <div class="user-info">
      <div class="user-avatar-container">
        <img src="/static/images/avatar.png" class="user-avatar">
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
      <img src="/static/images/prod_cat.png" class="prod-img">
    </div>
    <div class="prod-info-container">
      <div class="prod-name">
        {{prodName}}
      </div>
      <div class="prod-detail">
        <span class="prod-price">
          ¥{{price}}
        </span>
        <span class="prod-sales">
          月销：{{sales}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userName: '北京的豪猪',
        address: '广东广州',
        prodName: '【进口】美国进口猫粮',
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
    width: 46%;
    height: 220px;
    margin: 2%;
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
    width: 100%;
  }

  .user-name {
    color: black;
    font-size: 14px;
  }
  
  .user-address {
    color: #bdbaba;
    font-size: 8px;
    margin-left: auto;
    padding-right: 3px;
  }

  .prod-info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .prod-name {
    font-size: 12px;
    color: black;
    padding: 6px;
  }

  .prod-detail {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .prod-price {
    padding: 0 6px;
  }

  .prod-sales {
    padding: 0 6px;
    margin-left: auto;
    font-size: 10px;
    color: #bdbaba;
  }

</style>