<template>
  <div class="btn-login-container">
    <button class="btn-login" v-if="!isLogin" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">登陆</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'login btn'
      }
    }
  }
</script>

<style scoped>
  .btn-login {
    
  }
</style>