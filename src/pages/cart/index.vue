<template>
  <div class="cart-container">
    <h1>
      I am a shop_cart!!
    </h1>
  </div>
</template>

<script>
  import { wechat } from '@/utils/wechat'
  export default {
    data () {
      return {
        products: []
      }
    },
    onLoad () {
      wechat.setNavigationBarTitle('购物车')
    }
  }
</script>

<style>
  
</style>