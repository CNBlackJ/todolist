const prods = [
  { _id: 1, name: '【进口】美国原装猫粮', types: ['cat'], price: '99.99', imgs: ['prod_cat.png'], sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州', avatar: 'avatar.png' } },
  { _id: 2, name: '猫砂', types: ['cat'], price: '99.99', imgs: ['prod_cat.png'], sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州', avatar: 'avatar.png' } },
  { _id: 3, name: '国产狗粮', types: ['dog'], price: '99.99', imgs: ['prod_cat.png'], sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州', avatar: 'avatar.png' } },
  { _id: 4, name: '仓鼠笼子', types: ['rat'], price: '99.99', imgs: ['prod_cat.png'], sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州', avatar: 'avatar.png' } },
  { _id: 5, name: '仓鼠宝宝', types: ['rat'], price: '99.99', imgs: ['prod_cat.png'], sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州', avatar: 'avatar.png' } },
  { _id: 6, name: '巴西龟', types: ['tortoise'], price: '99.99', imgs: ['prod_cat.png'], sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州', avatar: 'avatar.png' } },
  { _id: 7, name: '通用饲料', types: ['cat', 'dog', 'rat', 'tortoise'], price: '99.99', imgs: ['prod_cat.png'], sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州', avatar: 'avatar.png' } }
]

const state = {
  prodList: [],
  searchType: ''
}

const mutations = {
  setProdList (state, { prodList }) {
    state.prodList = prodList
  },
  setSearchType (state, { searchType }) {
    state.searchType = searchType
  }
}

const actions = {
  setProdList ({ state, commit }) {
    const searchType = state.searchType || 'all'
    const prodList = searchType === 'all' ? prods : prods.filter(prod => prod.types.indexOf(searchType) > -1)
    commit('setProdList', { prodList })
  },
  async clearProdList ({ state, commit }) {
    const prodList = []
    commit('setProdList', { prodList })
  },
  setSearchType ({ state, commit }, { searchType }) {
    commit('setSearchType', { searchType })
  }
}

export default {
  state,
  mutations,
  actions
}
