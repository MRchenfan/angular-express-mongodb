var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

const ROOT_DIR = path.resolve(__dirname);

http.createServer((req, res) => {
	var urlObj = url.parse(req.url, true, false)
	var filePath = ''

	if (urlObj.pathname === '/') {
		filePath = ROOT_DIR + '/index.html'
	} else {
		filePath = ROOT_DIR + urlObj.pathname
	}

	console.log(urlObj)
	console.log(filePath)

	fs.readFile(filePath, (err, data) => {

		if (err) {
			res.writeHead(404)
			res.end(JSON.stringify(err))
			return
		} else {
			res.writeHead(200)
			res.end(data)
		}

	})


}).listen(8080, () => {
	console.log('httpServer is runing on 8080')
})