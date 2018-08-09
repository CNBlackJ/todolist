<template>
  <div class="profile-container">
    <div class="profile-userinfo">
      <div class="profile-user-avatar">
        <img class="user-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      </div>
      <div class="profile-user-name-tags">
        <div class="profile-user-name">
          北京的豪猪
        </div>
        <div class="profile-user-tags">
          <span class="profile-user-score">
            20度宠爱值
          </span>
        </div>
      </div>
      <div class="profile-userinfo-setting">
        <a class="userinfo-setting-btn">
          修改个人信息
        </a>
      </div>
    </div>
    <div class="profile-collection">
      <a class="profile-collect-btn" @click="collect">
        <p>10</p>
        <span>收藏夹</span>
      </a>
      <a class="profile-tracks-btn" @click="tracks">
        <p>20</p>
        <span>足迹</span>
      </a>
    </div>
    <div class="profile-order-panel">
      <div class="order-panel-title">
        <span class="order-panel-title-left">我的订单</span>
        <div class="order-panel-title-right">
          <span>查看更多订单</span>
          <span>></span>
        </div>
      </div>
      <div class="order-panel-info">
        <a class="order-wait-pay">
          <img class="img-wait-pay" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/wait_pay.png" background-size="cover">
          <p>待支付</p>
        </a>
        <a class="order-wait-didpatch">
          <img class="img-wait-dispatch" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/wait_dispatch.png" background-size="cover">
          <p>待发出</p>
        </a>
        <a class="order-wait-sign">
          <img class="img-wait-sign" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/wait_sign.png" background-size="cover">
          <p>待签收</p>
        </a>
        <a class="order-wait-comment">
          <img class="img-wait-comment" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/wait_comment.png" background-size="cover">
          <p>待评价</p>
        </a>
        <a class="order-logistic">
          <img class="img-logistic" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/prod_logistic.png" background-size="cover">
          <p>物流信息</p>
        </a>
      </div>
    </div>

    <div class="setting-panel">
      <setting></setting>
    </div>

    <div class="recommendation">
      <div class="recom-header">
        <span class="recom-title">为·您·推·荐</span>
      </div>
      <div class="recom-prods">
        <prodCard v-for="prod in prodList" :key="prod._id" :prod="prod"></prodCard>
      </div>
    </div>
  </div>
</template>
  
<script>
  import prodCard from '@/components/prodCard'
  import setting from '@/components/setting'
  import { mapState } from 'vuex'
  import store from '@/store/index'
  import { wechat } from '@/utils/wechat'

  export default {
    store,
    components: {
      prodCard,
      setting
    },
    computed: {
      ...mapState({
        userInfo: state => state.todo.userInfo
      }),
      ...mapState('index', {
        prodList: state => state.prodList.slice(0, 3)
      }),
      ...mapState('login', {
        isLogin: state => state.isLogin
      })
    },
    onLoad () {
      wechat.setNavigationBarTitle('个人中心')
    },
    onShow () {
      if (!this.isLogin) {
        wechat.redirectTo('../login/main')
      } else {
        wx.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#ff0000' })
      }
    },
    methods: {
      bindViewTap () {
        wechat.navigateTo('../logs/main')
      },
      tracks () {
        console.log('you click tracks')
      },
      collect () {
        console.log('you click collect')
      }
    }
  }
</script>
  
<style scoped>
  .profile-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #efefef;
  }
  
  .profile-userinfo {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: red;
  }

  .profile-user-avatar {
    width: 30%;
  }

  .user-avatar {
    width: 58px;
    height: 58px;
    margin: 10px;
    border-radius: 50%;
  }

  .profile-user-name-tags {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    justify-content: space-around;
  }

  .profile-user-name {
    font-size: 16px;
  }

  .profile-user-score {
    border-radius: 10px;
    padding: 3px 15px;
    background-color: #8f0101;
  }

  .profile-userinfo-setting {
    width: 100%;
    color: white;
    padding: 20px 0 0 20px;
    font-size: 10px;
  }

  .profile-collection {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 10px 0;
    color: #747474;
    background-color: white;
  }

  .profile-collect-btn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #efefef;
  }

  .profile-tracks-btn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .profile-order-panel {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
  }

  .order-panel-title {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
    padding: 5px 0;
    align-items: center;
  }

  .order-panel-title-left {
    padding: 5px 0 5px 10px;
    font-size: 14px;
  }

  .order-panel-title-right {
    padding-right: 10px;
    color: #888888;
  }

  .order-panel-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding: 10px 0;
  }

  .order-wait-pay {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .order-wait-didpatch {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .order-wait-sign {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .order-wait-comment {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .order-logistic {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-wait-pay {
    height: 24px;
    width: 24px;
    padding-bottom: 8px;
  }

  .img-wait-dispatch {
    height: 24px;
    width: 24px;
    padding-bottom: 8px;
  }

  .img-wait-sign {
    height: 24px;
    width: 24px;
    padding-bottom: 8px;
  }

  .img-wait-comment {
    height: 24px;
    width: 24px;
    padding-bottom: 8px;
  }

  .img-logistic {
    height: 24px;
    width: 24px;
    padding-bottom: 8px;
  }

  .recommendation {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    background-color: #efefef;
  }

  .recom-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .recom-title {
    font-size: 14px;
  }

  .recom-prods {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    background-color: #efefef;
  }
</style>
  