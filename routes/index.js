var express = require('express');
var router = express.Router();
let path = require('path')

/* GET home page. */
router.get('/index', function(req, res, next) {

	// todo: get user from session
  res.render('index', { title: 'songsong', user: {  } });
});

/* GET webapp page. */
router.get('/webapp', (req, res, next) => {

	res.sendFile('/webapp/index.html')
})

module.exports = router;
