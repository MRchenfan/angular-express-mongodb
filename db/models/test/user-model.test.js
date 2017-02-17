let db = require('../../db')

let UserModel = db.model('UserModel')

let newUser = new UserModel({
	name: 'Damon',
	passwd: '123456'
})

/*newUser.save((err) => {

	console.log(err)
})*/

UserModel.find({}, (err, res) => {

	if (err) {
		console.log(err)
	} 
	console.log(res)
})
