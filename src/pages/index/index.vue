<template>
  <div class="container">
    <div class="top-header">
      <searchBar></searchBar>
      <typeBar></typeBar>
    </div>
    
    <div class="prod-cards">
      <prodCard v-for="i in 7" :key="i" ></prodCard>
    </div>
  </div>
</template>

<script>
  import search from '@/components/search'
  import typeBar from '@/components/typeBar'
  import prodCard from '@/components/prodCard'

  export default {
    data () {
      return {
        motto: 'Hello World'
      }
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
  }

  .prod-cards {
    padding: 20rpx;
    background-color: #efefef;
  }
</style>
