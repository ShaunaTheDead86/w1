const countOnly = require('../countOnly');
const assertObjectsEqual = require('../assertObjectsEqual');

console.log('testing assertObjectsEqual');

assertObjectsEqual(countOnly(['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe'],
  {Jason: true,Karima: true,Fang: true,Agouhanna: false}),
{Fang:2,Jason:1});
