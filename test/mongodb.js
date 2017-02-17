
var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server

var mongodbUrl = "mongodb://localhost:27017/blog"

MongoClient.connect(mongodbUrl, (err, db) => {

	if (db) {

		var col = db.collection('articles')
		var dataObj = {
			title: 'Hello mongodb',
			author: 'Damon',
			date: '2017/2'
		}
		col.insertMany([dataObj], (err, res) => {

			console.log(err)
			console.log(res)
		})
	}

	db.close()
})
