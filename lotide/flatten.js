let results = [];

const flatten = function(array) {
  for (const item of array) {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = flatten;