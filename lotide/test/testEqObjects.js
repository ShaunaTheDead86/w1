const chai = require('chai');
const assert = chai.assert;

const eqObjectsCheck = require('../eqObjects.js');

describe('#eqObjects()', function() {
  it('should return true when passed { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', function() {
    const input = { a: { z: 1 }, b: 2 };
    const expectedOutput = { a: { z: 1 }, b: 2 };
    const eqObjectsInput = eqObjectsCheck(input,expectedOutput);
    assert.isTrue(eqObjectsInput);
  });

  it('should return false when passed { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', function() {
    const input = { a: { y: 0, z: 1 }, b: 2 };
    const expectedOutput = { a: { z: 1 }, b: 2 };
    const eqObjectsInput = eqObjectsCheck(input,expectedOutput);
    assert.isFalse(eqObjectsInput);
  });

  it('should return false when passed { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', function() {
    const input = { a: { y: 0, z: 1 }, b: 2 };
    const expectedOutput = { a: 1, b: 2 };
    const eqObjectsInput = eqObjectsCheck(input,expectedOutput);
    assert.isFalse(eqObjectsInput);
  });
});
