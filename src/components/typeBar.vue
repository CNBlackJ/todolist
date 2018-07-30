<template>
  <div class="type-bar">
    <div
      v-for="item in columns"
      :key="item.key"
      @click="choice(item)"
      :class="{'type-btn-click': item.key === activeType}">
      <a class="type-btn">
        {{item.name}}
      </a>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import { mapState, mapActions } from 'vuex'

  export default {
    store,
    computed: {
      ...mapState('index', {
        searchType: state => state.searchType
      })
    },
    data () {
      return {
        columns: [
          { _id: 1, key: 'all', name: '全部' },
          { _id: 2, key: 'cat', name: '猫粮' },
          { _id: 3, key: 'dog', name: '狗粮' },
          { _id: 4, key: 'rat', name: '仓鼠' },
          { _id: 5, key: 'tortoise', name: '乌龟' }
        ],
        activeType: 'all'
      }
    },
    methods: {
      choice ({ _id, key, name }) {
        this.activeType = key
        const searchType = key
        this.setSearchType({ searchType })
        // 先清除 prodList
        this.clearProdList().then(() => {
          this.setProdList()
        }).catch((err) => {
          console.log(err)
        })
      },
      ...mapActions('index', [
        'setSearchType',
        'setProdList',
        'clearProdList'
      ])
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