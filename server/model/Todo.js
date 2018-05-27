const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  status: Number,
  isDeleted: { type: Boolean, default: false }
}, {
  collection: 'Todo'
})

schema.plugin(timestamps)

module.exports = schema
