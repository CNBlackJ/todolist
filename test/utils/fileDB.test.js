const FileDB = require('../../src/utils/fileDB')

const model = 'test'
const fileDB = new FileDB(model)

// const createRes = fileDB.create({ title: 'ddd' })
// console.log(createRes)

const listRes = fileDB.list({ status: 2 })
console.log(listRes)

const getRes = fileDB.get(3)
console.log(getRes)

const getId = fileDB.getMaxId()
console.log(getId)

const updateRes = fileDB.updateById(1, { title: 'I am a title', status: 1 })
console.log(updateRes)
