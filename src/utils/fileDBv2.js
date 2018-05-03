import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

export function list () {
  const model = 'todo'
  const fileName = `${process.cwd()}/storage/${model}.json`
  const adapter = new LocalStorage(fileName)
  console.log(adapter)
  const db = low(adapter)
  // const res = db.get(model).value()
  console.log(db)
  // return res
}
