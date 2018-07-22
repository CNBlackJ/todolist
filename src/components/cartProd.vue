<template>
  <div class="cart-prod-container">
    <div class="cart-prod-detail">
      <div class="cart-prod-img-container">
        <img src="/static/images/cart_prod.png" class="cart-prod-img">
      </div>
      <div class="cart-prod-info">
        <div class="cart-prod-name">
          {{prodName}}
        </div>
        <div class="cart-prod-size">
          {{size}}
        </div>
        <div class="cart-prod-count">
          {{count}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        prodName: '【进口】小蠢狗',
        size: '白色 - 1.3kg',
        count: 1
      }
    }
  }
</script>

<style>
  .cart-prod-container {
    background-color: white;
    padding: 0 20px;
  }

  .cart-prod-detail {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid #efefef;
    padding: 10px;
  }

  .cart-prod-img-container {
    height: 100px;
    width: 30%;
  }

  .cart-prod-img {
    width: 100%;
    height: 100%;
  }

  .cart-prod-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .cart-prod-name {
    font-size: 12px;
  }

  .cart-prod-size {
    font-size: 12px;
  }

  .cart-prod-count {
    font-size: 12px;
  }
</style>