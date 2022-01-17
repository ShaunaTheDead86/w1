const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

console.log('testing flatten');

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6], true);
