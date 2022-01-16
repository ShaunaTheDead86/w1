const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) return false;

  const hasSameKey = function(obj, key) {
    if (!obj[key]) return false;

    return true;
  };

  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray([key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else {
      if (!assertEqual(object1[key], object2[key])) return false;
    }

    if (!hasSameKey(object2, key)) return false;
  }

  return true;
};

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