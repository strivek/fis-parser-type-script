/*
 * 
 * https://github.com/strivek/
 */

'use strict';

var tss = require('typescript-simple');

module.exports = function(content, file, conf) {
	return tss(content.toString());
}
