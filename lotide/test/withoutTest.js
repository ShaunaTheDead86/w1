const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

console.log('testing without');

assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1','2']);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["hello", "world"]), ['lighthouse']);
