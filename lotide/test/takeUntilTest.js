const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
