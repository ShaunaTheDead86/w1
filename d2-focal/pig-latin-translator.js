var originalWords = process.argv.slice(2)
var pigLatinWords = []

console.log(originalWords)

for (var i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]))
}

console.log(pigLatinWords.join(' '))

function translateToPigLatin (word) {
  if (word[0].match(/[aeiou]/i)) {
    return word + 'yay'
  }

  return word.slice(1, word.length) + word[0] + 'ay'
}
