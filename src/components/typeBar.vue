<template>
  <div class="type-bar">
    <a class="type-btn" href="#" v-for="(item, index) in columns" :key="index">{{item}}</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns: ['全部', '猫粮', '狗粮', '仓鼠', '乌龟'],
        activeIndex: 0
      }
    }
  }
</script>

<style>
  .type-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .type-btn {
    text-decoration: none;
    margin-right: 10rpx;
    font-size: 32rpx;
    width: 10%;
  }
</style>