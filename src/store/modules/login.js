import { request } from '@/utils/request'
import { wechat } from '@/utils/wechat'

const state = {
  userInfo: {},
  isLogin: false
}

const mutations = {
  setUserInfo (state, { userInfo }) {
    state.userInfo = userInfo
  },
  setIsLogin (state, { isLogin }) {
    state.isLogin = isLogin
  }
}

const actions = {
  async getUserInfo ({ state, commit }) {
    const userInfo = (await wechat.getUserInfo()).userInfo
    commit('setUserInfo', { userInfo })
  },
  async login ({ state, commit }) {
    const jscode = (await wechat.login()).code
    const openId = await request.getToken(jscode)
    const authSetting = (await wechat.getSetting()).authSetting
    if (openId && authSetting['scope.userInfo']) {
      let userInfo = await request.getUser(openId)
      if (!userInfo) userInfo = (await wechat.getUserInfo()).userInfo
      userInfo.openId = openId
      commit('setUserInfo', { userInfo })
      commit('setIsLogin', { isLogin: true })
    }
  }
}

export default {
  state,
  mutations,
  actions
}
