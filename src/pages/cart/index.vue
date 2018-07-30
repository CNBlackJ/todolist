<template>
  <div class="cart-container">
    
    <div v-if="!cartList.length" class="cart-empty-info">
      <p>购物车空空如也～</p>
    </div>
    <cartProd v-if="cartList.length" v-for="cartProd in cartList" :key="cartProd._id" :prod="cartProd"></cartProd>

    <div class="cart-footer">
      <div class="cart-count">
        <span>合计：</span>
        <span>¥ </span>
        <span>{{priceCounter}}</span>
      </div>
      <a @click="pay" class="cart-pay">结算({{cartList.length}})</a>
    </div>
  </div>
</template>

<script>
  import { wechat } from '@/utils/wechat'
  import cartProd from '@/components/cartProd'

  import store from '@/store/index'
  import { mapState, mapActions } from 'vuex'

  export default {
    store,
    computed: {
      ...mapState('cart', {
        cartList: state => state.cartList,
        priceCounter: state => state.priceCounter
      })
    },
    data () {
      return {
        products: [],
        prodCount: 0
      }
    },
    onLoad () {
      wechat.setNavigationBarTitle('购物车')
    },
    onShow () {
      this.setPriceCounter()
    },
    components: {
      cartProd
    },
    methods: {
      ...mapActions('cart', [
        'setPriceCounter'
      ]),
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

  .cart-empty-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #999999;
    font-size: 16px;
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