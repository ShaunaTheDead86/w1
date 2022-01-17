const countLetters = function(input) {
  let results = {};

  for (const letter of input) {
    if (letter.match(/[A-Z]/i)) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

module.exports = countLetters;
