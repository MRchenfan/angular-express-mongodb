let dateFormat = require('../../framework/date-format');

let time = Date.now();
console.log(dateFormat(time, 'isoUtcDateTime'));