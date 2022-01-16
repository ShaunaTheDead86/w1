const chai = require('chai');
const assert = chai.assert;

const eqObjects = require('../eqObjects.js');

describe('#eqObjects()', function() {
  it('should return true when passed { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', function() {
    const input = { a: { z: 1 }, b: 2 };
    const expectedOutput = { a: { z: 1 }, b: 2 };
    const areEqual = eqObjects(input,expectedOutput);
    assert.areEqual(areEqual);
  });
});