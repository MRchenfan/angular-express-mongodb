let db = require('../../db')

let BookModel = db.model('BookModel')

let newBook = new BookModel({
	title: 'hello mongodb',
	author: 'damon',
	type: 'mongodb',
	country: 'China',
})

console.log(newBook.metadata)

let anotherBook = new BookModel({
	metadata: 'hello damon',
	type: 'fe',
	country: 'US'
})

console.log(anotherBook.title, anotherBook.author)

/*newBook.save((err, product, numberAffected) => {

	if (err) {
		console.log('save err: ')
		return console.log(err)
	}
	console.log(product)
})*/

/*newBook.getSameType('mongodb', (err, res) => {

	console.log('getSameType:')
	console.log(res)
})*/

/*BookModel.getAllBooks((err, res) => {

	console.log('getAllBooks:')
	console.log(res)
})*/