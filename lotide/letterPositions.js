const letterPositions = function(input) {
  let results = {};
  let count = 0;

  for (const letter of input) {
    if (letter.match(/[A-Z]/i)) {
      if (results[letter]) {
        results[letter].push(count);
      } else {
        results[letter] = [count];
      }
    }
    count++;
  }

  return results;
};

module.exports = letterPositions;
