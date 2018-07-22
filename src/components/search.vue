<template>
	<div class="search-container">
    <input
      type="text"
      class="search"
      :placeholder="isFocus ? '' : searchHolder"
      v-model="searchText" 
      @input="sourceChange" 
      @confirm="onSearchConfirm" 
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
	</div>
</template>

<script>

export default {
  data () {
    return {
      searchHolder: '大家都在搜\'猫粮\'',
      searchText: '',
      isFocus: false
    }
  },
  methods: {
    onSearchConfirm () {
      console.log('confirm')
    },
    sourceChange (v) {
      console.log(JSON.stringify(v))
    }
  }
}
</script>

<style>
  .search-container {
    padding: 0 20rpx;
  }

  .search {
    border-radius: 50rpx;
    background-color: #efefef;
    height: 60rpx;
  }
</style>
	