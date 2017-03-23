let router = require('express').Router();
let config = require('../../config/config');
let querystring = require('querystring');
let crypto = require('crypto');
let dateFormat = require('../../framework/date-format');
let url = require('url');
let md5 = require('../../framework/md5');

router.get('/prepare', (req, res, next) => {
	console.info('上传视频准备 /video/prepare');

	try {
		let id = config.oss.AccessKeyId;
		let key = config.oss.AccessKeySecret;
		let host = config.oss.host;
		let expire = Date.now() + 30 * 1000;
		let dir = 'test/';

		// callbackString policy signature 三个返回时需要base64编码
		let callback = (function() {

			let callbackUrl = req.query.callbackUrl ? req.query.callbackUrl : config.host + ':' + config.port + '/video/callback';
			let callbackBody = {
				filename: 'filename',
				size: 'size',
				mimeType: 'image/*',
				height: '400',
				width: '300',
				callbackBodyType: 'application/x-www-form-urlencoded'
			};
			let callbackParam = {
				callbackUrl: callbackUrl,
				callbackBody: querystring.stringify(callbackBody)
			};

			return JSON.stringify(callbackParam);
		}());
		let policy = (function() {

			let policyParam = {
				expiration: _gmt_iso8601(expire), // 2017-03-23T15:00:05Z
				conditions: [
					['content-length-range', 0, 1024 * 148576000],
					['starts-with', '$key', dir]
				]
			}

			return JSON.stringify(policyParam);
		}());

		// to base64
		callback = new Buffer(callback).toString('base64');
		policy = new Buffer(policy).toString('base64');
		let signature = (function() {

			// how to sign
			return crypto.createHmac('sha1', key).update(policy).digest().toString('base64');
		}());

		res.json({
			id: id,
			host: host,
			expire: expire,
			dir: dir,
			callback: callback,
			policy: policy,
			signature: signature
		});
	} catch (err) {

		console.error(err);
		res.send(err);
	}
});

router.post('/callback', (req, res, next) => {

	console.info('ali callback');
	console.log(req.headers);
	console.log(req.body);
	console.info('=================== =========== ========================');

	try {
		// validate
		// public_key, path, querystring body... public_key ??
		let public_key = config.oss.ossPublicKey; // new Buffer(req.headers['x-oss-pub-key-url'], 'base64').toString();
		let pathname = req.path;
		let query_string = querystring.stringify(req.query);
		let authorization = req.headers.authorization;
		let body = (function() {

			let tmpArr = [];
			for (var k in req.body) {

				tmpArr.push(k + '=' + req.body[k]);
			}
			return tmpArr.join('');
		}());

		// rsa verify
		let verify = crypto.createVerify('sha1');
		let data = md5(pathname + query_string + '\n' + body); // md5 加密后使用
		verify.update(data);
		console.info('publickey authorization:');
		console.log(public_key, authorization);
		let validate = verify.verify(public_key, authorization);
		// 更新数据库操作

		return res.json({
			success: true,
			message: '保存文件成功',
			validate: validate,
			public_key: public_key,
			pathname: pathname,
			query_string: query_string,
			authorization: authorization,
			body: body,
			public_key_url: new Buffer(req.headers['x-oss-pub-key-url'], 'base64').toString()
		});
	} catch(err) {

		console.error(err);
		res.json(err);
	}
})

/**
 * [_gmt_iso8601 description]
 * @param  {string} time time uinx time stamp
 * @return {string}      [2017-03-23T15:00:05Z]
 */
function _gmt_iso8601(time) {

	let d = dateFormat(time, 'isoUtcDateTime');

	return d; // 2017-03-23T15:00:05Z
}

module.exports = router;