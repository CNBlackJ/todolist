const state = {
  prodList: []
}

const mutations = {
  setProdList (state, { prodList }) {
    state.prodList = prodList
  }
}

const actions = {
  async getProdList ({ state, commit }) {
    const prodList = [
      { _id: 1, name: '【进口】美国原装猫粮', price: '99.99', headImg: '', sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州' } },
      { _id: 2, name: '【进口】美国原装猫粮', price: '99.99', headImg: '', sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州' } },
      { _id: 2, name: '【进口】美国原装猫粮', price: '99.99', headImg: '', sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州' } },
      { _id: 2, name: '【进口】美国原装猫粮', price: '99.99', headImg: '', sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州' } },
      { _id: 2, name: '【进口】美国原装猫粮', price: '99.99', headImg: '', sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州' } },
      { _id: 2, name: '【进口】美国原装猫粮', price: '99.99', headImg: '', sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州' } },
      { _id: 2, name: '【进口】美国原装猫粮', price: '99.99', headImg: '', sales: 999, seller: { _id: 1, name: '五星豪猪', address: '广东广州' } }
    ]
    commit('setProdList', { prodList })
  }
}

export default {
  state,
  mutations,
  actions
}
