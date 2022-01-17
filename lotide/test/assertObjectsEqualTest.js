const assertObjectsEqual = require('../assertObjectsEqual');
const assertEqual = require('../assertEqual');

console.log('testing assertObjectsEqual');

assertEqual(assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' }),true);
