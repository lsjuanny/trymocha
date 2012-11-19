if ('undefined' != typeof require) {
  var mocha = require('mocha');
  var chai = require('chai');
  var expect = chai.expect;
  var libpath = process.env['YOUR_LIBRARY_NAME_COV'] ? '../lib-cov' : '../lib';
  var operator = require(libpath + '/operator');
  var alg = require(libpath + '/algorithm');
}

describe('Operator', function(){
  describe('sub', function(){
    it('should return correct number when pass ', function(){
      expect(operator.sub(1,2)).to.equal(-1);
      expect(operator.sub(9,3)).to.equal(6);
    })
  })
})