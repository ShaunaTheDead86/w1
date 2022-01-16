const flatten = function(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i]);
    } else {
      result.push(array[i]);
    }
  }

  return result;
};