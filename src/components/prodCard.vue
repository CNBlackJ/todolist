<template>
  <div class="prod-card" @click="goToProdDetail(prod._id)">
    <div class="user-info">
      <div class="user-avatar-container">
        <img src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/avatar.png" class="user-avatar" background-size="cover">
      </div>
      <div class="user-name-container">
        <span class="user-name">
          {{prod.seller.name}}
        </span>
        <span class="user-address">
          {{prod.seller.address}}
        </span>
      </div>
    </div>
    <div class="prod-img-container">
      <img src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/prod_cat.png" class="prod-img" background-size="cover">
    </div>
    <div class="prod-info-container">
      <div class="prod-name">
        {{prod.name}}
      </div>
      <div class="prod-detail">
        <span class="prod-price">
          ¥{{prod.price}}
        </span>
        <span class="prod-sales">
          月销：{{prod.sales}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { wechat } from '@/utils/wechat'

  import store from '@/store/index'
  import { mapState, mapActions } from 'vuex'

  export default {
    store,
    props: [
      'prod'
    ],
    computed: {
      ...mapState('login', {
        isLogin: state => state.isLogin
      })
    },
    methods: {
      ...mapActions('index', [
        'setSelectedProd'
      ]),
      goToProdDetail (prodId) {
        this.setSelectedProd({ prodId }).then(() => {
          wechat.redirectTo(`../${this.isLogin ? 'product' : 'login'}/main`)
        })
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