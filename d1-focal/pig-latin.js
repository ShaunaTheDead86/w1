const pigLatin = function (input) {
  let vowels = /[aeiou]/
  let result = [];

  for (const word of input) {
    let newWord = word.split('')
    if (newWord[0].match(vowels)) {
      newWord.push('y')
      newWord.push('a')
      newWord.push('y')
    } else {
      let count = word.length

      while (!newWord[0].match(vowels) && count > 0) {
        newWord.push(newWord[0])
        newWord.shift()

        count--
      }
      newWord.push('a')
      newWord.push('y')
    }

    result.push(newWord.join(''))
  }

  console.log(result.join(' '))
}

pigLatin(['pig', 'latin']);
pigLatin(['this', 'is', 'all', 'just', 'gibberish']);
