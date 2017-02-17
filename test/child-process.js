let childProcess = require('child_process')

// let cmd = 'ls'
// let opt = {
// 	encoding: 'utf-8',
// 	timeout: 5000
// }

// let child = childProcess.exec(cmd, opt, (error, stdout, stderr) => {

// 	if (error) {

// 		console.log(error)
// 	}

// 	console.log('child_process => result:' + stdout)

// 	if (stderr) {

// 		console.log('child_process => stderr:' + stderr)
// 	}
// })

// child.on('exit', (code) => {

// 	console.log('child_process => exit: ' + code)
// })

/**
 * execFile
 * ********************************************************************
 */

let filePath = './url.js'
let args = {}
let opt = {}

let anotherChild = childProcess.execFile(filePath, args, opt, (error, stdout, stderr) => {

	if (error) {

		console.log(error)
	}

	console.log('child_process => result:' + stdout)

	if (stderr) {

		console.log('child_process => stderr:' + stderr)
	}
})

anotherChild.on('exit', (code) => {

	console.log('child_process => exit: ' + code)
})