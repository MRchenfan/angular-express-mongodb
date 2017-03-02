let _error = require('../config/error')
let express = require('express')
let router = express.Router()
let db = require('../db/db')

let UserModel = db.model('UserModel')

/* GET users login or register. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource')
})

router.post('/register', (req, res, next) => {
	let user = {
		name: req.body.name,
		passwd: req.body.passwd
	}

	// validate user
	if (!_validateUser(user)) {

		return res.json({
			success: false,
			error: _error.illegalInput
		})
	}
	let newUser = new UserModel(user)

	newUser.save((err, _res) => {

		if (err) {

			return res.json({
				success: false,
				error: _error.dbError
			})
		}
		if (!_res) {

			return res.json({
				success: false,
				error: _error.dbError
			})
		}

		// create success
		return res.json({
			success: true,
			result: _res
		})
	})

})

router.post('/login', (req, res, next) => {

	let user = {
		name: req.body.name,
		passwd: req.body.passwd
	}

	// validate user
	if (!_validateUser(user)) {

		return res.json({
			success: false,
			error: _error.illegalInput
		})
	}
	let query = user
	UserModel.findOne(query, (err, _res) => {

		if (err) {

			return res.json({
				success: false,
				error: _error.dbError
			})
		}
		if (!_res) {

			return res.json({
				success: false,
				error: _error.notFound
			})
		}

		// login success
		req.session.user = _res
		return res.json({
			success: true,
			result: _res
		})
	})
})

router.post('/logout', (req, res, next) => {

	req.session.user = null;
	res.redirect('index')
})

function _validateUser(user) {

	if (user.name && user.passwd) {

		return {
			success: true
		}
	} else {

		return {
			success: false,
			error: _error.illegalInput
		}
	}
}

module.exports = router;