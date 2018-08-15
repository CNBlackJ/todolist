<template>
  <div class="login-container">
    <div class="login-title">
      <span>
        皮皮宠物欢迎您
      </span>
    </div>
    <div class="avatar-container">
      <img class="unlogin-avatar" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/avatar.png" background-size="cover" />
    </div>
    <div class="btn-login-container">
      <button class="btn-login" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">微信号一键登陆</button>
    </div>
    <popup></popup>
  </div>
</template>

<script>
  import { wechat } from '@/utils/wechat'
  import { mapActions, mapState } from 'vuex'
  import store from '@/store/index'

  import popup from '@/components/popup'

  export default {
    store,
    components: {
      popup
    },
    computed: {
      ...mapState({
        isLogin: state => state.isLogin
      })
    },
    methods: {
      ...mapActions('login', [
        'login'
      ]),
      bindGetUserInfo (e) {
        console.log(e.mp.detail.rawData)
        if (e.mp.detail.rawData) {
          this.login().then(() => {
            wechat.switchTab('../index/main')
            // setTimeout(() => {
            //   wechat.switchTab('../index/main')
            // }, 2000)
          })
        } else {
          console.log('用户按了拒绝按钮')
        }
      }
    }
  }
</script>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-title {
    padding-top: 40%;
    font-size: 24px;
  }

  .avatar-container {
    padding-top: 5%;
  }

  .unlogin-avatar {
    height: 86px;
    width: 86px;
    border-radius: 100%;
  }

  .btn-login-container {
    padding-top: 5%;
  }

  .btn-login {
    padding: 5px 55px;
    margin-top: 5px;
    color: white;
    font-size: 16px;
    background-color: red;
    border-radius: 25px;
  }

  .phone-input {
    margin-top: 5px;
    border: 1px solid #efefef;
    border-radius: 5px;
  }

</style>