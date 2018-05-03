import fs from 'fs'
import low from 'lowdb'
import _ from 'lodash'
import LocalStorage from 'lowdb/adapters/LocalStorage'

function isExistFile (fileName) {
  return fs.existsSync(`./storage/${fileName}`)
}

export class FileDB {
  constructor (model) {
    const fileName = `${process.cwd()}/storage/${model}.json`
    const adapter = new LocalStorage(fileName)
    this.db = low(adapter)
    this.model = model
    if (!isExistFile(fileName)) {
      const schema = { }
      schema[model] = []
      this.db.defaults(schema).write()
    }
  }

  getMaxId () {
    const allData = this.list()
    return _.max(_.map(allData, ele => ele.id))
  }

  list (obj = {}) {
    const filter = Object.keys(obj).length ? { status: obj.status } : {}
    return this.db.get(this.model).filter(filter).value()
  }

  get (id) {
    return this.db.get(this.model).find({ id }).value()
  }

  updateById (id, data) {
    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      this.db.get(this.model).find({ id }).set(`${key}`, data[key]).write()
    }
    return this.get(id)
  }

  delete (id) {
    return this.updateById(id, { status: 2 })
  }

  create (value) {
    value.id = this.getMaxId() + 1
    value.status = 1 // 1: create 2: delete
    value.createdAt = Date.now()
    value.updatedAt = Date.now()
    this.db.get(this.model).push(value).write()
    return value
  }
}
