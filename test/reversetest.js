if ('undefined' != typeof require) {
  var mocha = require('mocha');
  var chai = require('chai');
  var expect = chai.expect;
  var libpath = process.env['YOUR_LIBRARY_NAME_COV'] ? '../lib-cov' : '../lib';
  var operator = require(libpath + '/operator');
  var alg = require(libpath + '/algorithm');
}

describe('Operator', function(){
  describe('reverse', function(){
    it('should return reversed array', function(){
      expect(alg.aReverse([1,2,3])).to.eql([3,2,1]);
    })
  })
})