const takeUntil = function(array, callback) {
  let result = [];

  for (const word of array) {
    if (callback(word)) {
      return result;
    }

    result.push(word);
  }
};

module.exports = takeUntil;
