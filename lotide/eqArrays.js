// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      if (!eqArrays(actual[i],expected[i])) {
        return false;
      }
    } else {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqArrays;
