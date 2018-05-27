const app = require('express')()
const bodyParser = require('body-parser')
const joi = require('joi')
joi.objectId = () => joi.string().hex().length(24)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const validator = require('./middleware/validator')
const todo = require('./controller').todo

app.get('/api/todos', async(req, res) => {
  const resp = await todo.list()
  res.jsonp(resp)
})

app.get('/api/todos/:_id', validator({

}),
 async(req, res) => {
   const _id = req.params._id
   const resp = await todo.get(_id)
   res.jsonp(resp)
 })

app.post('/api/todos', async(req, res) => {
  const payload = req.body
  const resp = await todo.create(payload)
  res.jsonp(resp)
})

app.put('/api/todos/:_id', async(req, res) => {
  const _id = req.params._id
  const payload = req.body
  const resp = await todo.update(_id, payload)
  res.jsonp(resp)
})

app.delete('/api/todos/:_id', async(req, res) => {
  const _id = req.params._id
  const resp = await todo.delete(_id)
  res.jsonp(resp)
})

app.listen(3001, () => console.log('express api server listening on 3001'))
