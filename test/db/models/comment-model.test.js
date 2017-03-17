let db = require('../../../db/db')

let commentModel = db.model('commentModel')

// commentModel.create({
//   sub: false,
//   reply: "article id",
//   author: "damon",
//   praise: 0,
//   content: "Hello world"
// }).then((res) => {
//
//   console.log(res)
// })

commentModel.find({})
  .then((res) => {

    console.log(res)
  })