if ('undefined' != typeof require) {
    var mocha = require('mocha');
  var chai = require('chai');
  var expect = chai.expect;
  var libpath = process.env['YOUR_LIBRARY_NAME_COV'] ? '../lib-cov' : '../lib';
  var operator = require(libpath + '/operator-common');
}

describe('Operator', function(){
  describe('multiple', function(){
    it('should return correct number when pass ', function(){
      expect(operator.multiple(1,2)).to.equal(2);
      expect(operator.multiple(-9,3)).to.equal(-27);
    })
  })
})