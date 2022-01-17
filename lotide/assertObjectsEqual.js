const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

const assertObjectsEqual = function(actual, expected) {

  if (!eqObjects(actual, expected)) {
    console.log(
      `⛔⛔⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
    return false;
  }

  console.log(
    `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  );
  return true;
};

module.exports = assertObjectsEqual;
