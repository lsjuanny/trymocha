if ('undefined' === typeof exports) {
	exports = {};
}

exports.factorial = function(factor) {
	if (factor <= 1) {
		return 1;
	} else {
		return factor * exports.factorial(factor - 1);
	}

}