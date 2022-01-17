const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(without([1, 2, 3]), [1], true);
assertArraysEqual(without(["1", "2", "3"]), [1, 2, "3"], true);
assertArraysEqual(without(["hello", "world", "lighthouse"]), ["hello", "world"], true);
