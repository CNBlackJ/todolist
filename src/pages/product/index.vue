<template>
  <div class="product-container">
    <div class="product-img-slide">
      <img src="/static/images/prod_cat.png" class="product-img" background-size="cover">
    </div>

    <div class="product-info">
      <div class="product-price">
        ¥ 99.99
      </div>
      <div class="product-tags">
        <span class="product-tag">皮皮优选</span>
      </div>
      <div class="product-name-share">
        <span class="product-name">【进口】美国进口狗粮 250g</span>
        <a class="product-share">分享</a>
      </div>
      <div class="product-sales-info">
        <span>快递：5.00</span>
        <span>月销500笔</span>
        <span>广东广州</span>
      </div>
    </div>

    <div class="product-promotion">
      <div class="promotion-title-group">
        <span class="promotion-title">新品</span>
        <span class="promotion-title">物流</span>
      </div>

      <div class="promotion-description-group">
        <span class="promotion-description">新品购买可获得等额宠爱值</span>
        <span class="promotion-description">顺丰承诺达</span>
      </div>

      <div class="promotion-detail-btn-group">
        <span class="promotion-detail-btn">></span>
        <span class="promotion-detail-btn">></span>
      </div>
    </div>

    <div class="product-shop-info">
      <div class="product-shop-title-group">
        <span class="product-shop-title">店铺</span>
        <span class="product-shop-title">店主</span>
      </div>

      <div class="product-shop-name-group">
        <span class="product-shop-name">五星豪猪</span>
        <span class="product-shop-name">豪猪🐷弟弟</span>
      </div>

      <div class="product-shop-score-group">
        <span class="product-shop-score">*****</span>
        <span class="product-shop-score">*****</span>
      </div>
    </div>

    <prodDetail></prodDetail>

    <div class="product-detail-menus">
      <div class="product-detail-btn">
        <div class="menu-collect">
            <img class="menu-img" src="/static/images/prod_detail_collect.png" background-size="cover">
            <span>收藏</span>
          </div>
          <div @click="goToHome" class="menu-home">
            <img class="menu-img" src="/static/images/prod_detail_home.png" background-size="cover">
            <span>首页</span>
          </div>
          <div class="menu-share">
            <img class="menu-img" src="/static/images/prod_detail_share.png" background-size="cover">
            <span>分享</span>
          </div>
      </div>
      <a @click="purchase" href="/pages/todo/main" class="menu-purchase-btn">
        <span class="menu-purchase-text">立即购买</span>
      </a>
    </div>
  </div>
</template>

<script>
  import { wechat } from '@/utils/wechat'
  import prodDetail from '@/components/prodDetail'

  export default {
    data () {
      return {
        title: '商品详情'
      }
    },
    components: {
      prodDetail
    },
    onLoad (options) {
      wechat.setNavigationBarTitle('商品详情')
    },
    methods: {
      purchase () {
        console.log('I am purchase')
      },
      goToHome () {
        wechat.switchTab('../index/main')
      }
    }
  }
</script>

<style>
  .product-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-content: center;
    background-color: #efefef;
    padding-bottom: 50px;
  }

  .product-img-slide {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-content: center;
  }

  .product-img {
    height: 275;
    width: 100%;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 10px;
    background-color: white;
  }

  .product-price {
    color: red;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
  }

  .product-tags {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-content: center;
    padding-bottom: 5px;
  }

  .product-tag {
    background-color: red;
    color: white;
    border-radius: 25px;
    padding: 0 10px;
    font-size: 10px;
  }

  .product-name-share {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 5px;
  }

  .product-name {
    font-size: 16px;
    font-weight: 500;
  }

  .product-share {
    border: 1px solid #efefef;
    border-radius: 10%;
    padding: 3px 10px;
    background-color: #efefef;
    color: #999999;
  }

  .product-sales-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #999999;
    padding: 5px 0;
  }

  .product-promotion {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
    background-color: white;
    padding: 20px 0 10px 0;
  }

  .promotion-title-group {
    display: flex;
    flex-direction: column;
    color: #999999;
    flex: 1 0 auto;
    padding-left: 10px;
  }

  .promotion-title {
    padding: 5px 0 10px 0;
  }

  .promotion-description-group {
    display: flex;
    flex-direction: column;
    flex: 6 0 auto;
    padding-left: 10px;
  }

  .promotion-description {
    padding: 5px 0 10px 0;
  }

  .promotion-detail-btn-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;
  }

  .promotion-detail-btn {
    padding: 5px 0 10px 0;
  }

  .product-shop-info {
    background-color: white;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0 10px 0;
  }

  .product-shop-title-group {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    color: #999999;
    padding-left: 10px;
  }

  .product-shop-title {
    padding: 5px 0 10px 0;
  }

  .product-shop-name-group {
    display: flex;
    flex-direction: column;
    flex: 6 0 auto;
  }

  .product-shop-name {
    padding: 5px 0 10px 0;
  }

  .product-shop-score-group {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  .product-shop-score {
    padding: 5px 0 10px 0;
  }

  .product-detail-menus {
    height: 50px;
    width: 100%;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    justify-content: space-around;
  }

  .product-detail-btn {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .menu-collect {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-share {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-purchase-btn {
    width: 50%;
    height: 100%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;
  }

  .menu-purchase-text {
    padding-top: 12px;
    color: white;
    font-size: 18px;
  }

  .menu-img {
    height: 18px;
    width: 18px;
    padding: 3px 0;
  }

</style>