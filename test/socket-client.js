var net = require('net')

var client = net.connect({
	port: '8080',
	host: 'localhost'
}, () => {
	client.write('Hello from client')
})

client.on('data', (data) => {
	console.log(data.toString())
})

client.on('end', () => {
	console.log('client: end')
})