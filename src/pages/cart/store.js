const state = {
  cartList: [],
  priceCounter: 0,
  prodCount: 0
}

const mutations = {
  setCartList (state, { cartList }) {
    state.cartList = cartList
  },
  setPriceCounter (state, { priceCounter }) {
    state.priceCounter = priceCounter
  },
  setProdCount (state, { prodCount }) {
    state.prodCount = prodCount
  }
}

const actions = {
  async addToCart ({ state, commit, rootState }) {
    // 复制数组
    const cartList = state.cartList.slice()
    const selectedProd = rootState.index.selectedProd
    selectedProd.count = 1
    cartList.push(selectedProd)
    commit('setCartList', { cartList })
  },
  async addProdCount ({ state, commit }, { prodId, num }) {
    const cartList = state.cartList.slice()
    cartList.forEach(prod => {
      if (prod._id === prodId) prod.count += num
    })
    commit('setCartList', { cartList })
  },
  async rmFromCart ({ state, commit }, { prodId }) {
    const cartList = state.cartList.slice()
    const newCartList = cartList.filter(cart => cart._id !== prodId)
    commit('setCartList', { cartList: newCartList })
  },
  async setPriceCounter ({ state, commit }) {
    const cartList = state.cartList
    let prodCount = 0
    let priceCounter = 0
    cartList.forEach((prod) => {
      const priceWithCount = (Number(prod.price * 100) * prod.count) / 100
      priceCounter = ((priceCounter * 100) + (Number(priceWithCount) * 100)) / 100
      prodCount += Number(prod.count)
    })
    commit('setPriceCounter', { priceCounter })
    commit('setProdCount', { prodCount })
  }
}

export default {
  state,
  mutations,
  actions
}
