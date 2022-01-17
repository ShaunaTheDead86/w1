const without = function(source, remove) {
  let result = [];

  for (const sourceWord of source) {
    if (remove.every(e => e !== sourceWord)) {
      result.push(sourceWord);
    }
  }

  return result;
};

module.exports = without;
