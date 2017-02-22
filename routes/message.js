let router = require('express').Router()

router.get('/', (req, res, next) => {

	res.render('message', {
		"title": "松松",
		"user": {
			"name": "松松",
			"id": "00001",
			"email": "goog@gmail.com"
		}
	})
})

module.exports = router