if ('undefined' === typeof exports) {
	exports = {};
}

exports.mod = function(a, b) {
	return a%b;
}

exports.factorial = function(a) {
	if(a < 2) {
		return 1;
	} else {
		return a * exports.factorial(a - 1);
	}
}