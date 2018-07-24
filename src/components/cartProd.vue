<template>
  <div class="cart-prod-container">
    <div class="cart-prod-detail">
      <div class="cart-prod-img-container">
        <img src="/static/images/cart_prod.png" class="cart-prod-img" background-size="cover">
      </div>
      <div class="cart-prod-info">
        <div class="cart-prod-name-price">
          <div class="cart-prod-name">
            {{prodName}}
          </div>
          <div class="cart-prod-price">
            <span>¥</span>
            {{price}}
          </div>
        </div>
        <div class="cart-prod-size">
          {{size}}
        </div>
        <div class="cart-prod-count">
          <a @click="plus" class="cart-btn-plus">+</a>
          <span class="cart-pord-sum">
              {{count}}
          </span>
          <a @click="minus" class="cart-btn-minus">-</a>
          <a class="cart-btn-delete">x</a>
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
        price: 99.99,
        size: '白色 - 1.3kg',
        count: 1
      }
    },
    methods: {
      plus () {
        this.count++
      },
      minus () {
        this.count--
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
  }

  .cart-prod-img-container {
    height: 100px;
    width: 50%;
    padding: 5px;
  }

  .cart-prod-img {
    width: 100%;
    height: 100%;
  }

  .cart-prod-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 5px 15px;
  }

  .cart-prod-name-price {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1 0 auto;
  }

  .cart-prod-name {
    font-size: 12px;
  }

  .cart-prod-price {
    margin-left: auto;
  }

  .cart-prod-size {
    font-size: 12px;
    flex: 1 0 auto;
  }

  .cart-prod-count {
    font-size: 12px;
    flex: 1.5 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .cart-btn-plus {
    padding: 5px 10px;
    border: 1px solid #efefef;
    border-radius: 5px;
  }

  .cart-btn-minus {
    padding: 5px 10px;
    border: 1px solid #efefef;
    border-radius: 5px;
  }

  .cart-pord-sum {
    padding: 5px 15px;
    border: 1px solid #efefef;
    border-radius: 5px;
  }

  .cart-btn-delete {
    margin-left: auto;
    font-size: 25px;
    font-weight: 200;
    color: #cfcfcf;
  }

  .cart-prod-footer {

  }
</style>