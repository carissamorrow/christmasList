let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  productName: { type: String },
  data: { type: String },
  description: { type: String }
})


module.exports = mongoose.model('List', schema)