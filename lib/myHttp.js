var http = require('http');

exports.get = function(url, callback) {
  return http.get(url, callback);
};
