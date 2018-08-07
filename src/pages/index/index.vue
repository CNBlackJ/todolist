<template>
  <div class="container">
    <div class="top-header">
      <searchBar></searchBar>
      <typeBar></typeBar>
    </div>
    
    <div class="prod-cards">
      <prodCard v-for="prod in prodList" :key="prod._id" :prod="prod"></prodCard>
    </div>
  </div>
</template>

<script>
  import search from '@/components/search'
  import typeBar from '@/components/typeBar'
  import prodCard from '@/components/prodCard'

  import { wechat } from '@/utils/wechat'

  import store from '@/store/index'
  import { mapState, mapActions } from 'vuex'

  import modal from '@/components/modal'

  export default {
    store,
    computed: {
      ...mapState('index', {
        prodList: state => state.prodList
      })
    },
    data () {
      return {
        motto: 'Hello World'
      }
    },
    created () {
      this.getSetting()
    },
    onLoad (options) {
      wechat.setNavigationBarTitle('皮皮宠物')
      this.setProdList()
    },
    components: {
      searchBar: search,
      typeBar,
      prodCard,
      modal
    },
    methods: {
      ...mapActions('index', [
        'setProdList'
      ]),
      ...mapActions('todo', [
        'getUserInfo',
        'login'
      ]),
      async getSetting () {
        this.login().then(() => {
          this.getUserInfo()
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #efefef;
    height: 100%;
    min-height: 600px;
  }

  .top-header {
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .prod-cards {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 63px;
  }
</style>
