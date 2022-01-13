import { eqArrays, assertArraysEqual } from './assertArraysEqual.js'

const without = function (source, remove) {
  let result = source.slice(0)

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        result.splice(i, 1)
      }
    }
  }

  return result
}

let source1 = [1, 2, 3]
let remove1 = [1]
let source2 = ['1', '2', '3']
let remove2 = [1, 2, '3']

let source1Check = source1.slice(0)
let remove1Check = remove1.slice(0)
let source2Check = source2.slice(0)
let remove2Check = remove2.slice(0)

console.log(without(source1, remove1)) // => [2, 3]
console.log(assertArraysEqual(source1,source1Check))
console.log(assertArraysEqual(remove1,remove1Check))
console.log(without(source2, remove2)) // => ["1", "2"]
console.log(assertArraysEqual(source2,source2Check))
console.log(assertArraysEqual(remove2,remove2Check))
