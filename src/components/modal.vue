<template>
  <div class="modal" v-show="isShow">
    <div class="modal-top" @click="closeModal"></div>
    <div class="modal-container">
      <div class="modal-title">
        {{info[infoKey].title}}
      </div>
      <div class="modal-content">
        <p>
            {{info[infoKey].description}}
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
        info: {
          newProd: { title: '新品特惠', description: '购买新品将会获得由皮皮宠物赠送的等额宠爱值，宠爱值可用于兑换您喜爱的商品' },
          sf: { title: '顺丰承诺达', description: '您购买的商品将有顺丰承诺达运送，货物将在第一时间送到您手中' }
        },
        isShow: true
      }
    },
    props: [
      'infoKey'
    ],
    methods: {
      closeModal () {
        this.isShow = !this.isShow
        this.$emit('closeModal')
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
    bottom: 5px;
    width: 95%;
    background: red;
    border-radius: 25px;
    font-size: 18px;
    padding: 3px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
</style>