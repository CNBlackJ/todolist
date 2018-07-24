<template>
  <div class="cart-container">
    <cartProd></cartProd>
    <cartProd></cartProd>
    <cartProd></cartProd>
    <cartProd></cartProd>
    <div class="cart-footer">
      <div class="cart-count">
        <span>合计：</span>
        <span>¥ </span>
        <span>{{priceCount}}</span>
      </div>
      <a @click="pay" class="cart-pay">结算({{prodCount}})</a>
    </div>
  </div>
</template>

<script>
  import { wechat } from '@/utils/wechat'

  import cartProd from '@/components/cartProd'

  export default {
    data () {
      return {
        products: [],
        priceCount: '0.00',
        prodCount: 0
      }
    },
    onLoad () {
      wechat.setNavigationBarTitle('购物车')
    },
    components: {
      cartProd
    },
    methods: {
      pay () {
        console.log('pay')
      }
    }
  }
</script>

<style>
  .cart-container {
    background-color: #efefef;
    border-top: 1px solid #efefef;
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 100%;
  }

  .cart-footer {
    height: 50px;
    width: 100%;
    bottom: 0;
    position: fixed;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #dddddd;
  }

  .cart-count {
    margin-right: auto;
    padding: 0 0 0 10px;
    font-size: 18px;
    font-weight: 300;
  }

  .cart-pay {
    margin-left: auto;
    font-size: 18px;
    font-weight: 300;
    background-color: red;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 25px;
  }
  
</style>