const findKey = function(object, callback) {
  let objectKeys = Object.keys(object);
  for (const key of objectKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
