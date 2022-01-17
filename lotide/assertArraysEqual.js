const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return true;
};

module.exports = assertArraysEqual;
