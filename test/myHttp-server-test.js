if ('undefined' != typeof require) {
  var mocha = require('mocha');
  var chai = require('chai');
  var expect = chai.expect;
  var libpath = process.env['YOUR_LIBRARY_NAME_COV'] ? '../lib-cov' : '../lib';
  var myHttp = require(libpath + '/myHttp-server');
}

//// asynchronous test
describe('Http', function() {
  describe('#get', function() {
    it('should return 200 success code', function(done) {
      myHttp.get('http://www.yahoo.com', myHttp.callback, done);
    });
  });
});