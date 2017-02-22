var net = require('net')

var server = net.createServer((client) => {
	// client.on('data', (data) => {
	// 	console.log('server: data from client ' + data.toString())
	// })

	// client.on('end', () => {
	// 	console.log('server: end')
	// })

	// client.write('Hello from server')
})

server.on('connection', (client) => {
	// 可以扩展client对象，添加标识符，进行管理
	client.id = Date.now();
	console.info('new client connected')
	console.log(client)

	client.on('data', (data) => {
		console.log('server => ' + client.id + ': ' + data.toString())
	})

	client.on('end', () => {
		console.log('server => ' + client.id + ' disconnected')
	})

	client.write('Hello from server')
})

server.on('error', (err) => {
	console.log(err)
})

server.listen(8080, () => {
	console.log('server: socket server is running on 8080')
})