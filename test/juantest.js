
if ('undefined' != typeof require) {
}

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    })
  })
})

describe('Algorithm', function(){
  describe('Reverse', function(){
    it('should reverse the input array', function(){
      expect(aReverse([1,2,3])).to.eql([3,2,1]);
    })
  })
})