const args = process.argv.slice(2)
const pwd = args[0].split('')
//const args = 'abracadabra'
const substitutions = [
  ['a', '4'],
  ['e', '3'],
  ['o', '0'],
  ['l', '1']
]

const obfuscate = function (password) {
  let result = []

  for (const char of pwd) {
    result.push(findSubstitute(char))
  }

  return result.join('')
}

const findSubstitute = function (letter) {
  if (letter === 'a') {
    return '4'
  }
  if (letter === 'e') {
    return '3'
  }
  if (letter === 'o') {
    return '0'
  }
  if (letter === 'l') {
    return '1'
  }
  return letter
}

console.log(obfuscate(pwd))