const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6], true);
