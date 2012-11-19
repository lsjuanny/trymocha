var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    })

    it('should return the correct index when the value is present', function(){
      expect([1,2,3].indexOf(1)).to.equal(0);
      expect([1,2,3].indexOf(2)).to.equal(1);
      expect([1,2,3].indexOf(3)).to.equal(2);
    })
  })
})

describe('Array', function(){
  describe('#pop()', function(){
    it('should remove and return the last value', function(){
      var arr = [1,2,3];
      expect(arr.pop()).to.equal(3);
      expect(arr).to.eql([1,2]);
    })
  })
})

context('Array', function(){
  beforeEach(function(){
    this.arr = [1,2,3];
  })

  specify('has a length property', function(){
    expect(this.arr.length).to.equal(3);
  })
})

//// asynchronous test
describe('Http', function() {
  describe('#get', function() {
    it('should return 200 success code', function(done) {
      require('http').get('http://www.yahoo.com', function(response) {
        expect(response.statusCode).to.equal(200);
        //// include 'done' in async callback to finish the test
        done();
      });
    });
  });
});
