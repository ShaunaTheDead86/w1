const letterPositions = require('../letterPositions');
const assertObjectsEqual = require('../assertObjectsEqual');

console.log('testing letterPositions');

assertObjectsEqual(letterPositions('hello world'),{
  h: [ 0 ],
  e: [ 1 ],
  l: [ 2, 3, 9 ],
  o: [ 4, 7 ],
  w: [ 6 ],
  r: [ 8 ],
  d: [ 10 ]
});
