const printItems = function(array) {
  let results = [];
 
  for (const item of array) {
    if (Array.isArray(item)) {
      let newArray = printItems(item);
      for (const newItem of newArray) {
        results.push(newItem);
      }
    } else {
      results.push(item);
    }
  }
  return results;
};

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
console.log(printItems(array));