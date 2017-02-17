var http = require('http')

var opt = {
	hostname: 'localhost',
	port: '8080',
	method: 'get',
	path: '/index.html'
}

http.request(opt, (res) => {
	var rawData = ''
	res.on('data', (chunk) => {
		rawData += chunk
	})

	res.on('end', () => {
		console.log(rawData)
	})
}).end()