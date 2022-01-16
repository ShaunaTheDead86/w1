const chai = require('chai');
const assert = chai.assert;

const eqArraysCheck = require('../eqArrays.js');

describe('#eqArrays()', function() {
  it('should return true when passed [[2, 3], [4]], [[2, 3], [4]]', function() {
    const input = [[2, 3], [4]];
    const expectedOutput = [[2, 3], [4]];
    const eqArraysInput = eqArraysCheck(input,expectedOutput);
    assert.isTrue(eqArraysInput);
  });

  it('should return false when passed [[2, 3], [4]], [[2, 3], [4, 5]]', function() {
    const input = [[2, 3], [4]];
    const expectedOutput = [[2, 3], [4, 5]];
    const eqArraysInput = eqArraysCheck(input,expectedOutput);
    assert.isFalse(eqArraysInput);
  });

  it('should return false when passed [[2, 3], [4]], [[2, 3], 4]', function() {
    const input = [[2, 3], [4]];
    const expectedOutput = [[2, 3], 4];
    const eqArraysInput = eqArraysCheck(input,expectedOutput);
    assert.isFalse(eqArraysInput);
  });
});
