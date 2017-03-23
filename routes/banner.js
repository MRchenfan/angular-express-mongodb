let router = require('express').Router()
let Busboy = require('busboy')
let fs = require('fs')

router.post('/upload', (req, res, next) => {

	let busboy = new Busboy({
		headers: req.headers
	})
	let result = {
		data: new Buffer([]),
		filename: ''
	}

	busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {

		result.filename = filename;

		file.on('data', function(data) {

			result.data = Buffer.concat([result.data, data]);
			console.log('File [' + fieldname + '] got ' + data.length + ' bytes')
		})

		file.on('end', function() {

			_onUploadSuccess();
			console.log('File [' + fieldname + '] Finished');
		})

		file.on('error', _onUploadError);
	})

	busboy.on('finish', function() {

		console.log('Done parsing form!')
		res.json({
			success: true,
			banner: { title: result.filename, url: 'img/' + result.filename }
		})
	})

	req.pipe(busboy);

	function _onUploadSuccess() {

		fs.writeFile('public/img/' + result.filename, result.data, (err) => {

			if (err) console.warn(err)
			else console.info(result.filename + ' is saved')
		})
	}

	function _onUploadError() {
		res.whiteHead(303, {
			Connection: 'close'
		})
	}
})

module.exports = router