const maxProfit = function(stocks) {
  if (stocks.length === 1) {
    return stocks[0];
  }
  
  const differential = positiveDifferential(stocks);

  if (differential.length === 1) {
    return differential[0];
  }
  
  const newStocks = [];
  for (const index of fillInbetween(differential)) {
    newStocks.push(stocks[index]);
  }
  
  console.log(maxProfit(newStocks));
};

const positiveDifferential = function(array) {
  let result = [];
  let lastIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] > 0) {
      lastIndex = i;
      result.push(i);
    }
  }

  result.push(lastIndex + 1);
  return result;
};

const fillInbetween = function(array) {
  for (let i = 0; i < array.length; i++) {
    const maxSize = array[i + 1] - 1;
    for (let j = array[i]; j < maxSize; j++) {
      array.splice(j,0,j + 1);
    }
  }
  return array;
};

// console.log(fillInbetween([1,5,10]));
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));