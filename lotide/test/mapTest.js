const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

console.log('testing map');

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], x => x[0]),['g','c','t','m','t']);
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], x => x === 'ground'),[true,false,false,false,false]);
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], x => x[0] === 't'),[false,false,true,false,true]);