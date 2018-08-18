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

  static async listTodo (status, openId) {
    const resp = await fly.get(`${url}/api/todos?status=${status}&openId=${openId}`)
    return resp.data
  }

  static removeTodo (id) {
    return fly.delete(`${url}/api/todos/${id}`)
  }

  static async moveToDone (id) {
    return fly.put(`${url}/api/todos/${id}`, { status: 2 })
  }

  static async reTodo (id) {
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
    return resp.data[0]
  }

  static async listProducts () {
    const resp = await fly.get(`${url}/api/products?limit=20`)
    return resp.data
  }

  static async getProduct ({ _id }) {
    const resp = await fly.get(`${url}/api/products/${_id}`)
    return resp.data
  }

  static async createCart ({ userId, productId }) {
    const resp = await fly.post(`${url}/api/carts`, { userId, productId })
    return resp.data
  }

  static async updateCart ({ _id, count }) {
    const resp = await fly.put(`${url}/api/carts/${_id}`, { count })
    return resp.data
  }
}
