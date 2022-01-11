const args = process.argv;
let answer = 0;

let cleanAndPrint = function(args) {
  let numbers = args.slice(2);
  //numbers.push(10);
  //numbers.push(25);
  console.log(numbers[0], numbers[1]);

  for (const i of numbers) {
    answer += Number(i);
  }
};

cleanAndPrint(args);
console.log(answer);