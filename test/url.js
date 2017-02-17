var url = require('url')
var querystring = require('querystring')

var baiduUrl = 'http://www.baidu.com/s?k=a&p=b#a'
var baiduUrlObj = url.parse(baiduUrl)

console.log(baiduUrlObj)
console.log(url.format(baiduUrlObj))
console.log(url.resolve(baiduUrl, '/search'))

// querystring

var queryObj = querystring.parse(baiduUrlObj.query)

console.log(queryObj)
console.log(querystring.stringify(queryObj, ' <> ', '=>'))

