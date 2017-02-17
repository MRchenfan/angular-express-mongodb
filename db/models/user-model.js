let mongoose = require('mongoose')

// schema
let UserSchema = new mongoose.Schema({
	name: { type: String, index: 1, required: true, unique: true },
	passwd: { type: String, index: 1, required: true },
})

// register model
mongoose.model('UserModel', UserSchema)

// methods

// statics
