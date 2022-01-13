import { eqObjects } from './eqObjects.js'
import { inspect } from 'util'

const assertObjectsEqual = function (actual, expected) {

  if (!eqObjects(actual, expected)) {
    console.log(
      `⛔⛔⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    )
    return false
  }

  console.log(
    `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  )
  return true
}

const obj1 = {test:"test"}
const obj2 = {test:"test"}

console.log(assertObjectsEqual(obj1, obj2))
