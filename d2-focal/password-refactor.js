const args = process.argv.slice(2)
const pwd = args[0].split('')

const obfuscatePassword = function (password) {
  let result = []

  for (const char of password) {
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

console.log(obfuscatePassword(pwd))