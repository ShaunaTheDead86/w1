// The second argument/parameter is expected to be a (callback) function
const findWaldoAnonymously = function(names, found) {
  names.forEach((e,i) => {
    if (e === 'Waldo') {
      found(i)
    }
  })
}

findWaldoAnonymously(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found him after just ${index} tries!`);
});
