var http = require('http');

exports.get = function(url, callback, done) {
  return http.get(url, function(response) {callback(response, done)});
};

exports.callback = function(response, done) {
        console.assert(response.statusCode === 200);
        done();
      };
