var stream = require('stream')
var util = require('util')

function Answers(opt) {
	stream.Readable.call(this)
	this.quotes = ['yes', 'no', 'maybe']
	this._index = 0
}

util.inherits(Answers, stream.Readable)

Answers.prototype._read = () => {
	if (this._index > this.quotes.length) {
		this.push(null)
	} else {
		this.push(this.quotes[this._index])
		this._index ++
	}
}

var r = new Answers()

console.log('direct read => ' + r.read().toString())

r.on('data', (data) => {
	console.log('on data => ' + data.toString())
})

r.on('end', () => {
	console.log('on end')
})


