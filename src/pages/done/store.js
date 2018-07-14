import { request } from '@/utils/request'

const state = {
  doneList: []
}

const mutations = {
  listDone (state, { doneList }) {
    state.doneList = doneList
  }
}

const actions = {
  async listDone ({ state, commit, rootState }) {
    const todos = await request.listTodo(2, rootState.todo.openId)
    const doneList = todos.map(t => { return { label: t.title, value: t._id, disabled: t.status === 2 } })
    commit('listDone', { doneList })
  }
}

export default {
  state,
  mutations,
  actions
}
