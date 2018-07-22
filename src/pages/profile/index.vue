<template>
  <div class="container">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
  </div>
</template>
  
<script>
  import card from '@/components/card'
  import { mapState } from 'vuex'
  import store from '@/store/index'
  import { wechat } from '@/utils/wechat'

  export default {
    store,
    components: {
      card
    },
    computed: {
      ...mapState({
        userInfo: state => state.todo.userInfo
      })
    },
    onLoad (options) {
      wechat.setNavigationBarTitle('个人中心')
    },
    methods: {
      bindViewTap () {
        const url = '../logs/main'
        wx.navigateTo({ url })
      }
    }
  }
</script>
  
  <style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
  
  .userinfo-nickname {
    color: #aaa;
  }
  
  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
  
  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
  </style>
  