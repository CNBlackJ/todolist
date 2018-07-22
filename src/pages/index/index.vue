<template>
  <div class="container">
    <div class="top-header">
      <searchBar></searchBar>
      <typeBar></typeBar>
    </div>
    
    <div class="prod-cards">
      <prodCard v-for="i in 19" :key="i" ></prodCard>
    </div>
  </div>
</template>

<script>
  import search from '@/components/search'
  import typeBar from '@/components/typeBar'
  import prodCard from '@/components/prodCard'

  import { wechat } from '@/utils/wechat'

  export default {
    data () {
      return {
        motto: 'Hello World'
      }
    },
    onLoad (options) {
      wechat.setNavigationBarTitle('皮皮宠物')
    },
    components: {
      searchBar: search,
      typeBar,
      prodCard
    }
  }
</script>

<style scoped>
  .container {
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .top-header {
    background-color: white;
    position:fixed;
    top:0;
    width:100%;
  }

  .prod-cards {
    background-color: #efefef;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 63px;
  }
</style>
