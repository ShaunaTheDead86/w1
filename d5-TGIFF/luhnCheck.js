const luhnCheck = function(num, check) {
  num = ('' + num).split('');

  for (let i = num.length - 1; i >= 0; i--) {
    num[i] = Number(num[i]) * 2;
    if (num[i] >= 10) {
      num[i] = ('' + num[i]).split('');
      num[i] = Number(num[i][0]) + Number(num[i][1]);
    }

    i--;
  }

  let sum = 0;

  for (let item of num) {
    if (typeof item === 'string') {
      item = Number(item);
    }

    if (typeof item === 'number') {
      sum += item;
    }
  }

  const checkDigit = 10 - sum % 10;

  if (checkDigit === check) return true;

  return false;
};

console.log(luhnCheck(183704293,4));

module.exports = luhnCheck;