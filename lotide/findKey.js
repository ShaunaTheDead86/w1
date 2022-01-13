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

const input = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(input, x => x.stars === 2), "noma");

const input2 = {
  "Blue Hill": { stars: 3 },
  "Akaleri": { stars: 1 },
  "noma": { stars: 3 },
  "elBulli": { stars: 2 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(input2, x => x.stars === 2), "elBulli");

const input3 = {
  "Blue Hill": { stars: 2 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(input3,x => x.stars === 2),"Blue Hill");