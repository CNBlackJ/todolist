<template>
  <div class="setting-container">
    <div class="setting">
      <div class="setting-col-1">
        <a class="setting-userinfo">
          <img class="img-setting-userinfo" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/setting_userinfo.png" background-size="cover">
          <p>个人信息</p>
        </a>
        <a class="setting-address">
          <img class="img-setting-address" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/setting_address.png" background-size="cover">
          <p>收获地址</p>
        </a>
        <a class="setting-score">
          <img class="img-setting-score" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/setting_score.png" background-size="cover">
          <p>我的宠爱值</p>
        </a>
      </div>
      <div class="setting-col-2">
        <a class="setting-join">
          <img class="img-setting-join" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/setting_join.png" background-size="cover">
          <p>我要入驻</p>
        </a>
        <a class="setting-message">
          <img class="img-setting-message" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/setting_message.png" background-size="cover">
          <p>我的消息</p>
        </a>
        <a class="setting-contact">
          <img class="img-setting-contact" src="https://images-1255936829.cos.ap-guangzhou.myqcloud.com/images/setting_contact.png" background-size="cover">
          <p>联系我们</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: ''
      }
    }
  }
</script>

<style>
  .setting-container {
    margin-top: 20px;
    background-color: white;
    width: 100%;
  }

  .setting {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .setting-col-1 {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #efefef;
  }

  .setting-col-2 {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
  }

  .setting-userinfo {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 10px 0;
  }

  .setting-address {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .setting-score {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .setting-join {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .setting-message {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .setting-contact {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .img-setting-userinfo {
    height: 24px;
    width: 24px;
    padding-bottom: 5px;
  }

  .img-setting-address {
    height: 24px;
    width: 24px;
    padding-bottom: 5px;
  }

  .img-setting-score {
    height: 24px;
    width: 24px;
    padding-bottom: 5px;
  }

  .img-setting-join {
    height: 24px;
    width: 24px;
    padding-bottom: 5px;
  }

  .img-setting-message {
    height: 24px;
    width: 24px;
    padding-bottom: 5px;
  }

  .img-setting-contact {
    height: 24px;
    width: 24px;
    padding-bottom: 5px;
  }
</style>