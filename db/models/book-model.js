let mongoose = require('mongoose')

let BookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String },
	type: { type: String },
	country: { type: String }
}, {
	timestamps: true
})

// methods
BookSchema.methods.getSameType = function(type, cb) {

	return this.model('BookModel').find({ type: type }, cb)
}

// statics
BookSchema.statics.getAllBooks = function(cb) {

	return this.find({}, cb)
}

// virtual
BookSchema.virtual('metadata').get(function() {

	return this.title + ' ' + this.author
})

BookSchema.virtual('metadata').set(function(metadata) {

	let splitArr = metadata.split(' ')
	this.title = splitArr[0]
	this.author = splitArr[1]
})


mongoose.model('BookModel', BookSchema)







