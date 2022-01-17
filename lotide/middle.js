const middle = function(array) {
  if (array.length === undefined) {
    return [];
  }

  if (array.length < 3) {
    return [];
  }

  if (array.length % 2 === 0) {
    return [array.length / 2, array.length / 2 + 1];
  }

  return [Math.ceil(array.length / 2)];
};

module.exports = middle;
