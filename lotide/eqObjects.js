const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) return false;

  const hasSameKey = function(obj, key) {
    if (!obj[key]) return false;

    return true;
  };

  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray([key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else {
      if (!assertEqual(object1[key], object2[key])) return false;
    }

    if (!hasSameKey(object2, key)) return false;
  }

  return true;
};

module.exports = eqObjects;