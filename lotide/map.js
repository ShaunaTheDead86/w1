const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }

  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return true;
};

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
const words2 = ['hello','world'];
const results2 = map(words2, word => word[0]);
console.log(assertArraysEqual(results2, ['h', 'w']));
const words3 = ['let\'s','map','some','words','together'];
const results3 = map(words3, word => word[0]);
console.log(assertArraysEqual(results3, ['l', 'm', 's', 'w', 't']));

console.log("test");