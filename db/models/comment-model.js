
let mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
  sub: { type: Boolean , required: true },
  reply: { type: String , required: true },
  author: { type: String, required: true },
  praise: { type: Number, default: 0 },
  content: { type: String, required: true }
})

mongoose.model('commentModel', commentSchema)

