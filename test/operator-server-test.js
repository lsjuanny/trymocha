if ('undefined' != typeof require) {
  var mocha = require('mocha');
  var chai = require('chai');
  var expect = chai.expect;
  var libpath = process.env['YOUR_LIBRARY_NAME_COV'] ? '../lib-cov' : '../lib';
  var operator = require(libpath + '/operator-server');
}



describe('Operator', function(){
  describe('factorial', function(){
    it('If factor is 1 should return 1', function(){
      expect(operator.factorial(1)).to.equal(1);
    });

    it('If factor is 2 should return 2', function(){
      expect(operator.factorial(2)).to.equal(2);
    });
    
    it('If factor is 10 should return 3628800', function(){
      expect(operator.factorial(10)).to.equal(3628800);
    });
    
    it('If factor is 0 should return 1', function(){
      expect(operator.factorial(0)).to.equal(1);
    })
  })
})
