import { eqArrays, assertArraysEqual } from './assertArraysEqual.js'
import { flatten } from './flatten.js'

const letterPositions = function (input) {
  let results = {}
  let count = 0

  for (const letter of input) {
    if (letter.match(/[A-Z]/i)) {
      if (results[letter]) {
        results[letter].push(count)
      } else {
        results[letter] = [count]
      }
    }
    count++
  }

  return results
}

const returnedObject = flatten(Object.entries(letterPositions('hello')))
const sentence = flatten(Object.entries({ h: [0], e: [1], l: [2,3], o: [4] }))

console.log(assertArraysEqual(returnedObject,sentence))