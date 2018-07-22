<template>
  <div class="type-bar">
    <div
      v-for="(item, index) in columns"
      :key="index"
      @click="choice(index)"
      :class="{'type-btn-click': index === activeIndex}">
      <a class="type-btn">
        {{item}}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns: ['全部', '猫粮', '狗粮', '仓鼠', '乌龟'],
        activeIndex: 0
      }
    },
    methods: {
      choice (i) {
        this.activeIndex = i
        console.log(`you choice: ${this.columns[i]}`)
      }
    }
  }
</script>

<style>
  .type-bar {
    display: flex;
    justify-content: space-between;
    padding: 16rpx 40rpx 0 40rpx;
  }

  .type-btn {
    text-decoration: none;
    font-size: 32rpx;
  }

  .type-btn-click {
    color: #cc3232;
    box-shadow: inset 0 -3rpx 0 #cc3232;
  }
</style>