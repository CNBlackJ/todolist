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
  async listDone ({ state, commit }, { openId }) {
    const todos = await request.listTodo(2, openId || 'o7OMH0ZfDiW8d_kfu3DGi09OhWkU')
    const doneList = todos.map(t => { return { label: t.title, value: t._id, disabled: t.status === 2 } })
    commit('listDone', { doneList })
  }
}

export default {
  state,
  mutations,
  actions
}
