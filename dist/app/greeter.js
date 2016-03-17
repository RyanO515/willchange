'use strict';

function greeter() {
	var msg = arguments.length <= 0 || arguments[0] === undefined ? 'Hello world!' : arguments[0];

	return msg;
}

module.exports = greeter;