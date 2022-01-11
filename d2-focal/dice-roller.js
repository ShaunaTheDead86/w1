const arguments = process.argv
const dice = arguments.slice(2)
const dieMax = 6

const rollDice = function (dice) {
  let result = []

  for (let i = 0; i < dice; i++) {
    result.push(Math.ceil(Math.random() * dieMax))
  }

  return result.join(', ')
}

console.log(`Rolled ${dice} dice: ${rollDice(dice)}`)
