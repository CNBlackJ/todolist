<template>
  <div class="popup-container">
    <div class="popup-content">
      <p>
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '您已成功登陆，自动跳转到首页'
      }
    }
  }
</script>

<style>
  .popup-container {
    position: fix;
    background-color: #efefef;
    bottom: 20%;
  }
</style>