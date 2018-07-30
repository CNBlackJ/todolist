const state = {
  cartList: [],
  priceCounter: 0
}

const mutations = {
  setCartList (state, { cartList }) {
    state.cartList = cartList
  },
  setPriceCounter (state, { priceCounter }) {
    state.priceCounter = priceCounter
  }
}

const actions = {
  async addToCart ({ state, commit, rootState }) {
    // 复制数组
    const cartList = state.cartList.slice()
    cartList.push(rootState.index.selectedProd)
    commit('setCartList', { cartList })
  },
  async rmFromCart ({ state, commit }, { prodId }) {
    const cartList = state.cartList.slice()
    const newCartList = cartList.filter(cart => cart._id !== prodId)
    commit('setCartList', { cartList: newCartList })
  },
  async setPriceCounter ({ state, commit }) {
    const cartList = state.cartList
    let priceCounter = 0
    cartList.forEach((prod) => {
      priceCounter += Number(prod.price)
    })
    commit('setPriceCounter', { priceCounter })
  }
}

export default {
  state,
  mutations,
  actions
}
