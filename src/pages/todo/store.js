import { request } from '@/utils/request'
import { wechat } from '@/utils/wechat'

const state = {
  userInfo: {
    avatarUrl: 'https://secure.gravatar.com/avatar/aac2f5df7319d9cc3eb089695857613f?s=180&d=identicon'
  },
  openId: '',
  isLogin: false,
  checkedTodos: [],
  todoList: [],
  todoTitle: ''
}

const mutations = {
  setUserInfo (state, { userInfo }) {
    state.userInfo = userInfo
  },
  setOpenId (state, { openId }) {
    state.openId = openId
    state.userInfo.openId = openId
  },
  login (state) {
    state.isLogin = true
  },
  setTodoList (state, { todoList }) {
    state.todoList = todoList
  },
  setTodoTitle (state, { count }) {
    state.todoTitle = `你还有${count}件事待办哦～`
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
      commit('login')
      let userInfo = await request.getUser(openId)
      if (!userInfo) userInfo = (await wechat.getUserInfo()).userInfo
      commit('setUserInfo', { userInfo })
      commit('setOpenId', { openId })
    }
  },
  async getTodoList ({ state, commit }) {
    const todos = (await request.listTodo(1, state.openId)) || []
    const todoList = todos.map(t => { return { label: t.title, value: t._id } })
    commit('setTodoList', { todoList })
    commit('setTodoTitle', { count: todoList.length })
  },
  async addTodo ({ state, commit }, { title }) {
    const todo = { title, userId: state.userInfo._id }
    await request.createTodo(todo)
  },
  async addToDone ({ state, commit }, { doneId }) {
    if (doneId) await request.moveToDone(doneId)
  }
}

export default {
  state,
  mutations,
  actions
}
