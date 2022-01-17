const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

console.log('testing assertArraysEqual');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([[2, 3], [4]],[[2, 3], [4]]),true);
assertArraysEqual(eqArrays([[2, 3], [4]],[[2, 3], [4, 5]]),false);
assertArraysEqual(eqArrays([[2, 3], [4]],[[2, 3], 4]),false);
