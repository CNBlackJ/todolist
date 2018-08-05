<template>
  <div class="login-container">
    <div class="login-title">
      <span>
        皮皮宠物账号登陆
      </span>
    </div>
    <div class="avatar-container">
      <img class="unlogin-avatar" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/avatar.png" background-size="cover" />
    </div>
    <div class="btn-login-container">
      <button class="btn-login" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">微信号</button>
      <button class="btn-login">手机号</button>
      <input type="text" placeholder="输入手机号" class="phone-input">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
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
    padding-top: 20%;
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