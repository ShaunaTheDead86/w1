// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((e,i,callbackFn) => {
    callbackFn = found
    if (e === 'Waldo') {
      callbackFn(i)
    }
  })
}

const actionWhenFound = function(index) {
  console.log(`Found him after just ${index} tries!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
