<template>
  <div class="modal" v-show="isShow">
    <div class="modal-top" @click="closeModal"></div>
    <div class="modal-container">
      <div class="modal-title">
        新品特惠
      </div>
      <div class="modal-content">
        <p>
          购买新品将会获得由皮皮宠物赠送的等额宠爱值，宠爱值可用于兑换您喜爱的商品
        </p>
      </div>
      <div class="modal-back-btn" @click="closeModal">
        <span>完成</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'modal',
        isShow: true
      }
    },
    methods: {
      closeModal () {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style>
  .modal {
    position: fixed;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .modal-top {
    opacity: .5;
    height: 40%;
    background-color: #efefef;
  }

  .modal-container {
    position: fixed;
    bottom: 0;
    height: 60%;
    width: 100%;
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-title {
    font-size: 18px;
    border-bottom: 1px solid #efefef;
  }

  .modal-content {
    padding: 10px;
  }

  .modal-back-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: red;
    border-radius: 25px;
    font-size: 18px;
    padding: 3px;
    color: white;
  }
  
</style>