
if ('undefined' != typeof require) {
}

suite('Array', function(){
  setup(function(){
    // ...
  });

  suite('#indexOf()', function(){
    test('should return -1 when not present', function(){
      expect([1,2,3].indexOf(4)).to.equal(-1);
    });
    test('should return corresponding index when present', function(){
      expect([1,2,3].indexOf(2)).to.equal(1);
    });
  });
});

// suite('Algorithm', function(){
//   setup(function(){
//     // ...
//   });

//   suite('Reverse()', function(){
//     test('should reverse the input array', function(){
//       expect(aReverse([1,2,3])).to.eql([3,2,1]);
//     });
//   });
// });