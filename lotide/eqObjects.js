import { assertEqual } from './assertEqual.js'
import { eqArrays } from './assertArraysEqual.js'

const eqObjects = function (object1, object2) {
  let object1Keys = Object.keys(object1)
  let object2Keys = Object.keys(object2)

  if (object1Keys.length !== object2Keys.length) return false

  const hasSameKey = function (obj, key) {
    if (!obj[key]) return false

    return true
  }

  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray([key])) {
      if (!eqArrays(object1[key], object2[key])) return false
    } else {
      if (!assertEqual(object1[key], object2[key])) return false
    }

    if (!hasSameKey(object2, key)) return false
  }

  return true
}

const ab = { a: '1', b: '2' }
const ba = { b: '2', a: '1' }
console.log(eqObjects(ab, ba)) // => true

const abc = { a: '1', b: '2', c: '3' }
console.log(eqObjects(ab, abc)) // => false

const cd = { c: '1', d: ['2', 3] }
const dc = { d: ['2', 3], c: '1' }
console.log(eqObjects(cd, dc)) // => true

const cd2 = { c: '1', d: ['2', 3, 4] }
console.log(eqObjects(cd, cd2)) // => false

export { eqObjects }
