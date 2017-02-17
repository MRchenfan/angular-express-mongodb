let dns = require('dns')

let urlString = 'www.baidu.com'

dns.resolve4(urlString, (err, addrs) => {

	console.log('dns.resolve4() => addrs = /n' + JSON.stringify(addrs))

	addrs.forEach((addr, idx) => {

		dns.reverse(addr, (err, domains) => {

			if (err) {

				console.log(err)
			}
			console.log('dns.reverse() => ' + addr + ' = ' + JSON.stringify(domains))
		})
	})
})