const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let i = 0; i < obj1.length; i++) {
    if (obj1Keys[i] !== obj2Keys[i]) return false;
  }

  for (const key in obj1) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key],obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;
