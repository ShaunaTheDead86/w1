const findKeyByValue = function(parentObject, valueToFind) {
  let parentKeys = Object.keys(parentObject);

  for (const key of parentKeys) {
    if (parentObject[key] === valueToFind) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};