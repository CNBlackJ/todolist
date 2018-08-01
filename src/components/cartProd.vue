<template>
  <div class="cart-prod-container">
    <div class="cart-prod-detail">
      <div class="cart-prod-img-container">
        <img src="/static/images/cart_prod.png" class="cart-prod-img" background-size="cover">
      </div>
      <div class="cart-prod-info">
        <div class="cart-prod-name-price">
          <div class="cart-prod-name">
            {{prod.name}}
          </div>
          <div class="cart-prod-price">
            <span>¥</span>
            {{prod.price}}
          </div>
        </div>
        <div class="cart-prod-size">
          {{size}}
        </div>
        <div class="cart-prod-count">
          <a @click="plus(prod._id)" class="cart-btn-plus" :class="{'cart-btn-dis': isMax}">+</a>
          <span class="cart-pord-sum">
              {{count}}
          </span>
          <a @click="minus(prod._id)" class="cart-btn-minus" :class="{'cart-btn-dis': isMinimum}">-</a>
          <a @click="deleteFromCart(prod._id)" class="cart-btn-delete">x</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import { mapActions } from 'vuex'

  export default {
    store,
    data () {
      return {
        size: '1.3kg',
        count: 1,
        isMinimum: false,
        isMax: false
      }
    },
    props: [
      'prod'
    ],
    methods: {
      ...mapActions('cart', [
        'rmFromCart',
        'setPriceCounter',
        'addProdCount'
      ]),
      deleteFromCart (prodId) {
        this.rmFromCart({ prodId })
      },
      plus (prodId) {
        this.isMinimum = false
        if (this.count < 15) {
          this.count++
          this.addProdCount({ prodId, num: 1 }).then(() => {
            this.setPriceCounter()
          })
        }
        if (this.count >= 15) this.isMax = true
      },
      minus (prodId) {
        this.isMax = false
        if (this.count > 0) {
          this.count--
          this.addProdCount({ prodId, num: -1 }).then(() => {
            this.setPriceCounter()
          })
        }
        if (this.count <= 0) this.isMinimum = true
      }
    }
  }
</script>

<style>
  .cart-prod-container {
    background-color: white;
    padding: 0 20px 0 15px;
  }

  .cart-prod-detail {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-content: center;
    border-bottom: 1px solid #efefef;
  }

  .cart-prod-img-container {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-content: center;
  }

  .cart-prod-img {
    width: 64px;
    height: 64px;
    margin: auto;
  }

  .cart-prod-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 20px 0 20px 20px;
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

  .cart-btn-dis {
    background-color: #efefef;
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