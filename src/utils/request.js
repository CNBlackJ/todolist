import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
fly.interceptors.request.use((request) => {
  request.headers['authorization'] = 'vinliToken'
  return request
})

const env = process.env.NODE_ENV

const url = env === 'production' ? 'https://www.wifihi.cn' : 'http://localhost:3001'

export class request {
  static async createTodo (todo) {
    const resp = await fly.post(`${url}/api/todos`, todo)
    return resp.data
  }

  static async listTodo (status, userId) {
    const resp = await fly.get(`${url}/api/todos?status=${status}&userId=${userId}`)
    return resp.data
  }

  static removeTodo (id) {
    return fly.delete(`${url}/api/todos/${id}`)
  }

  static moveToDone (id) {
    return fly.put(`${url}/api/todos/${id}`, { status: 2 })
  }

  static reTodo (id) {
    return fly.put(`${url}/api/todos/${id}`, { status: 1 })
  }

  static async createUser (userInfo) {
    const resp = await fly.post(`${url}/api/users`, userInfo)
    return resp.data
  }

  static async getToken (jscode) {
    const payload = { code: jscode }
    const resp = await fly.post(`${url}/api/token`, payload)
    return resp.data.openid
  }

  static async getUser (openId) {
    const resp = await fly.get(`${url}/api/users?openId=${openId}`)
    return resp.data
  }
}
