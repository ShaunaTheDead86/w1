const without = function(source, remove) {
  let result = source.slice(0);

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        result.splice(i, 1);
      }
    }
  }

  return result;
};