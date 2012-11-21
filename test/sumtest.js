if ('undefined' != typeof require) {
  var mocha = require('mocha');
  var chai = require('chai');
  var expect = chai.expect;
  var libpath = process.env['YOUR_LIBRARY_NAME_COV'] ? '../lib-cov' : '../lib';
  var operator = require(libpath + '/operator');
  var alg = require(libpath + '/algorithm');
  var myHttp = require(libpath + '/myHttp');
}

describe('Operator', function(){
  describe('sum', function(){
    it('should return correct number when', function(){
      expect(operator.sum(1,2)).to.equal(3);
      expect(operator.sum(3,9)).to.equal(12);
    })

    it('should return the correct summary when have negative', function(){
      expect(operator.sum(1,-2)).to.equal(-1);
      expect(operator.sum(-4,9)).to.equal(5);
    })
  })
})

//// asynchronous test
describe('Http', function() {
  describe('#get', function() {
    it('should return 200 success code', function(done) {
      myHttp.get('http://www.yahoo.com', myHttp.callback, done);
    });
  });
});

