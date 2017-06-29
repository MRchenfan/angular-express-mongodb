var express = require('express');
var router = express.Router();
let path = require('path')

/* GET home page. */
router.get('/index', function(req, res, next) {

	// todo: get user from session
	res.render('index', {
		"title": "Songsong",
		"banner": [{
			"title": "songsong",
			"url": "/img/ss00001.jpg",
			"author": "songsong",
			"time": "2017/3/2",
			"praise": "10086",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci quasi mollitia, rerum sit eveniet fuga in, voluptatem voluptates perspiciatis necessitatibus! Ipsam eaque, eos inventore quam tempore ad. Quaerat, necessitatibus!"
		}, {
			"title": "songsong",
			"url": "/img/ss00002.jpg",
			"author": "songsong",
			"time": "2017/3/2",
			"praise": "10086",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci quasi mollitia, rerum sit eveniet fuga in, voluptatem voluptates perspiciatis necessitatibus! Ipsam eaque, eos inventore quam tempore ad. Quaerat, necessitatibus!"
		}, {
			"title": "songsong",
			"url": "/img/ss00003.jpg",
			"author": "songsong",
			"time": "2017/3/2",
			"praise": "10086",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci quasi mollitia, rerum sit eveniet fuga in, voluptatem voluptates perspiciatis necessitatibus! Ipsam eaque, eos inventore quam tempore ad. Quaerat, necessitatibus!"
		}, {
			"title": "songsong",
			"url": "/img/ss00004.jpg",
			"author": "songsong",
			"time": "2017/3/2",
			"praise": "10086",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci quasi mollitia, rerum sit eveniet fuga in, voluptatem voluptates perspiciatis necessitatibus! Ipsam eaque, eos inventore quam tempore ad. Quaerat, necessitatibus!"
		}],
		"introduce": {
			"name": "松松",
			"gender": false,
			"age": "19",
			"education": "合肥新华学院",
			"job": "UI设计",
			"city": "郑州",
			"img": "/img/ss00003.jpg",
			"background": "/img/imsongsong.png",
			"hobby": ["Music", "Tenis", "LOL"]
		},
		"works": [{
			"title": "songsong",
			"url": "/img/0487.png",
			"author": "songsong",
			"time": "2017/3/2",
			"praise": "10086",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci quasi mollitia, rerum sit eveniet fuga in, voluptatem voluptates perspiciatis necessitatibus! Ipsam eaque, eos inventore quam tempore ad. Quaerat, necessitatibus!"
		}, {
			"title": "songsong",
			"url": "/img/0487.png",
			"author": "songsong",
			"time": "2017/3/2",
			"praise": "10086",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci quasi mollitia, rerum sit eveniet fuga in, voluptatem voluptates perspiciatis necessitatibus! Ipsam eaque, eos inventore quam tempore ad. Quaerat, necessitatibus!"
		}, {
			"title": "songsong",
			"url": "/img/0487.png",
			"author": "songsong",
			"time": "2017/3/2",
			"praise": "10086",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci quasi mollitia, rerum sit eveniet fuga in, voluptatem voluptates perspiciatis necessitatibus! Ipsam eaque, eos inventore quam tempore ad. Quaerat, necessitatibus!"
		}, {
			"title": "songsong",
			"url": "/img/0487.png",
			"author": "songsong",
			"time": "2017/3/2",
			"praise": "10086",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci quasi mollitia, rerum sit eveniet fuga in, voluptatem voluptates perspiciatis necessitatibus! Ipsam eaque, eos inventore quam tempore ad. Quaerat, necessitatibus!"
		}],
		"hobby": [{
			"title": "songsong",
			"url": "/img/0487.png"
		}, {
			"title": "songsong",
			"url": "/img/0487.png"
		}, {
			"title": "songsong",
			"url": "/img/0487.png"
		}, {
			"title": "songsong",
			"url": "/img/0487.png"
		}]
	});
});

/* GET webapp page. */
router.get('/webapp', (req, res, next) => {

	res.sendFile('/webapp/index.html')
})

module.exports = router;
