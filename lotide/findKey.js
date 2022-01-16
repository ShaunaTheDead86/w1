const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const findKey = function(object, callback) {
  let objectKeys = Object.keys(object);
  for (const key of objectKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
};