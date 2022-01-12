const data = {
  f01: {
    name: 'Alice',
    age: 15,
    follows: ['f02', 'f03', 'f04']
  },
  f02: {
    name: 'Bob',
    age: 20,
    follows: ['f05', 'f06']
  },
  f03: {
    name: 'Charlie',
    age: 35,
    follows: ['f01', 'f04', 'f06']
  },
  f04: {
    name: 'Debbie',
    age: 40,
    follows: ['f01', 'f02', 'f03', 'f05', 'f06']
  },
  f05: {
    name: 'Elizabeth',
    age: 45,
    follows: ['f04']
  },
  f06: {
    name: 'Finn',
    age: 25,
    follows: ['f05']
  }
}

const biggestFollower = function (input) {
  let biggest = 0

  for (const key of Object.keys(input)) {
    if (input[key].follows.length > biggest) biggest = input[key].follows.length
  }

  return biggest
}

console.log(biggestFollower(data))

const mostPopular = function (input) {
  let popular = ''

  for (const key of Object.keys(input)) {
    if (input[key].follows.length > biggest) biggest = input[key].follows.length
  }

  return popular
}

console.log(mostPopular(data))

const printAll = function (data) {}

const unrequitedFollowers = function (data) {}

const over30Followers = function (data) {}

const followsOver30 = function (data) {}

const findReachOfAll = function (data) {}
