import { request } from '@/utils/request'

const state = {
  doneList: []
}

const mutations = {
  async listDone (state) {
    const status = 2
    const todos = await request.listTodo(status, 'o7OMH0ZfDiW8d_kfu3DGi09OhWkU')
    if (todos.length) {
      state.doneList = todos.map(t => { return { label: t.title, value: t._id, disabled: t.status === 2 } })
    }
  }
}

export default {
  state,
  mutations
}
