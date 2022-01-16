const chai = require('chai');
const assert = chai.assert;

const luhnCheckTest = require('../luhnCheck.js');

describe('#eqArrays()', function() {
  it('should return true when passed 7992739871', function() {
    const input = 7992739871;
    const expectedOutput = 3;
    const check = luhnCheckTest(input,expectedOutput);
    assert.isTrue(check);
  });

  it('should return true when passed 183704293', function() {
    const input = 183704293;
    const expectedOutput = 4;
    const check = luhnCheckTest(input,expectedOutput);
    assert.isTrue(check);
  });

  it('should return false when passed 102226', function() {
    const input = 102226;
    const expectedOutput = 7;
    const check = luhnCheckTest(input,expectedOutput);
    assert.isFalse(check);
  });



// console.log(luhnCheck(7992739871));
// 1837042934
// 1022268
});
