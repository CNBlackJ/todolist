<template>
  <div class="container">
    <!-- <searchBar></searchBar> -->
    <typeBar></typeBar>
    
    <div v-for="i in 7" :key="i" class="prod-cards">
      <prodCard></prodCard>
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
    padding: 0 30rpx;
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .prod-cards {
    padding: 8rpx;
    display: flex;
    align-items: center;
  }
</style>
