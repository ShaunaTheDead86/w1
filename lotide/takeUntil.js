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

const takeUntil = function(array, callback) {
  let result = [];

  for (const word of array) {
    if (callback(word)) {
      return result;
    }

    result.push(word);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1,[1,2,5,7,2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2,["I've","been","to","Hollywood"]));
