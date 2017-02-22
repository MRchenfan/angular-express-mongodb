let util = require('util')

/**
 * format()
 */
let json = {
	"name": "Damon",
	"age": 24
}
let fmt = util.format('%s = %j', 'json', json)
console.log('util.format() => ' + fmt)

/**
 * isXXX()
 */
 // .......

/**
 * stdout
 */
util.log('log')

/**
 * inspect()
 */
let obj = {
	name: 'Damon',
	age: 24,
	// inspect: function(depth) {
	// 	return this.name + ' => ' + this.age
	// }
}
let opt = {
	colors: true,
	showHidden: true,
	depth: null
}
console.log(util.inspect(obj, opt))

/**
 * inherits()
 */















