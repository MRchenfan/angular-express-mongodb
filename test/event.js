let EventEmitter = require('events').EventEmitter
let util = require('util')

let Myobj = function() {
	EventEmitter.call(this)
}

util.inherits(Myobj, EventEmitter)

let myobj = new Myobj()

myobj.on('say', (word) => {
	console.log(word);
})

setImmediate(() => {
	myobj.emit('say', 'Hello');
})
