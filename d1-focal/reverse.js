const args = process.argv;
let result = [];

const reverse = function (input) {
  for (const word of input) {
    let reversedWord = "";
    for (let i = word.length; i >= 0; i--) {
      reversedWord += word.charAt(i);
    }
    result.push(reversedWord);
  }

  for (const reversedWord of result) {
    console.log(reversedWord);
  }
};

reverse(args);