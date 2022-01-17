const findKeyByValue = function(parentObject, valueToFind) {
  let parentKeys = Object.keys(parentObject);

  for (const key of parentKeys) {
    if (parentObject[key] === valueToFind) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
