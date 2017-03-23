module.exports = {
	devHost: 'http://localhost:3000',
	host: 'http://122.74.51.76',
	port: '8888',
	db: {
		uri: 'mongodb://localhost/blog',
		user: '',
		passwd: ''
	},
	oss: {
		bucketName: 'damon4bucket',
		AccessKeyId: 'LTAIoqLj2Hlv7neS',
		AccessKeySecret: '71bvnD0KDHaki08C4EEzvEHppWclYP',
		region: 'oss-cn-shanghai',
		host: 'http://damon4bucket.oss-cn-shanghai.aliyuncs.com',
		tip: '阿里云OSS，请确保AK的安全性',
		ossPublicKey: '-----BEGIN PUBLIC KEY-----\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKs/JBGzwUB2aVht4crBx3oIPBLNsjGs\nC0fTXv+nvlmklvkcolvpvXLTjaxUHR3W9LXxQ2EHXAJfCB+6H2YF1k8CAwEAAQ==\n-----END PUBLIC KEY-----' 
	}
}