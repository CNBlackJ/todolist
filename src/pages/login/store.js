const state = {
  isLogin: false
}

const mutations = {
  setIsLogin (state, { isLogin }) {
    state.isLogin = isLogin
  }
}

const actions = {
  setIsLogin ({ state, commit }) {
    commit('setIsLogin', { isLogin: true })
  }
}

export default {
  state,
  mutations,
  actions
}
