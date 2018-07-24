<template>
  <div class="profile-container">
    <div class="profile-user-info">
      <div class="profile-user-avatar">
        <img class="user-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      </div>
      <div class="profile-user-name-score">
        <div class="profile-user-name">
          北京的豪猪
        </div>
        <div class="profile-user-score">
          宠爱值 0
        </div>
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
  .profile-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .profile-user-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: red;
  }

  .profile-user-avatar {
    width: 30%;
  }

  .user-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .profile-user-name-score {
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

  }
</style>
  