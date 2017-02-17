var buf256 = new Buffer(256)

buf256.write('abcde', 0, 5, 'utf-8')

buf256.fill(0, 5, 256)

console.log(buf256.toString('utf-8', 0, 3))

console.log('abcd e \u00b6'.length) // 8
console.log(Buffer.byteLength('abcd e \u00b6', 'utf-8')) // 9

// copy

var copyBuf256 = new Buffer(128)
copyBuf256.fill()
buf256.copy(copyBuf256, 0, 0, 5);

console.log('copyBuf256 => ' + copyBuf256.toString())

// slice

var sliceBuf256 = buf256.slice(0, 3)

console.log('sliceBuf256 => ' + sliceBuf256.toString())

sliceBuf256.write('xxx', 0, 1, 'utf-8')

console.log('sliceBuf256 => ' + sliceBuf256.toString())
console.log('buf256 => ' + buf256.toString())

// concat
var concatBuf = Buffer.concat([buf256, sliceBuf256])
console.log('concat => ' + concatBuf.toString())


