
process.stdin.on('data', (data) => {
	console.log('stdin => ' + data);

	if (data.toString() == 'exit') {
		process.exit(0)
	}
})
