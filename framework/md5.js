'use strict'
/**
 * @ignore  =====================================================================================
 * @file md5 tools
 * @author  damon
 * @version 0.1.0
 * @ignore  created in 2017/2/18
 * @ignore  depend
 * @ignore  =====================================================================================
 */

let crypto = require('crypto');

module.exports = function(str) {

	return crypto.createHash('md5').update(str).digest('hex');
}