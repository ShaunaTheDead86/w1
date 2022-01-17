const countLetters = require('../countLetters');
const assertObjectsEqual = require('../assertObjectsEqual');

console.log('testing assertObjectsEqual');

assertObjectsEqual(countLetters('hello world'),{
  h:1,
  e:1,
  l:3,
  o:2,
  w:1,
  r:1,
  d:1 },true);
  