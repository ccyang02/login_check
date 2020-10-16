const mongoose = require('mongoose')
const Schema = mongoose.Schema

const infoSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: true
  },
  password: {
    type: String,
    default: true
  }
})

module.exports = mongoose.model('Info', infoSchema)