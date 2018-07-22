<template>
  <div class="cart-container">
    <cartProd></cartProd>
    <cartProd></cartProd>
  </div>
</template>

<script>
  import { wechat } from '@/utils/wechat'

  import cartProd from '@/components/cartProd'

  export default {
    data () {
      return {
        products: []
      }
    },
    onLoad () {
      wechat.setNavigationBarTitle('购物车')
    },
    components: {
      cartProd
    }
  }
</script>

<style>
  .cart-container {
    background-color: #efefef;
    height: 200px;
    border-top: 1px solid #efefef;
  }
  
</style>