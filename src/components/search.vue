<template>
	<div class="search-container">
    <mp-search 
      @confirm="onSearchConfirm"
      @change="onSearchChange"
      :placeholder="searchHolder"
    />
	</div>
</template>

<script>
import MpSearch from 'mp-weui/packages/search'

export default {
  data () {
    return {
      searchHolder: '大家都在搜\'猫粮\''
    }
  },
  components: {
    MpSearch
  },
  methods: {
    onSearchConfirm () {
      console.log('confirm')
    },
    onSearchChange (v) {
      console.log(`type: ${v}`)
    }
  }
}
</script>

<style>

</style>
	