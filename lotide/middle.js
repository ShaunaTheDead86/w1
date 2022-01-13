import { eqArrays, assertArraysEqual } from './assertArraysEqual.js'

const middle = function (array) {
  if (array.length < 3) {
    return []
  }

  if (array.length % 2 === 0) {
    return [array.length / 2, array.length / 2 + 1]
  }

  return [Math.ceil(array.length / 2)]
}

console.log(assertArraysEqual(middle([1]), []))
console.log(assertArraysEqual(middle([1, 2]), []))
console.log(assertArraysEqual(middle([1, 2, 3]), [2]))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]))
