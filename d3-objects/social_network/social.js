const inspect = require('util').inspect

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

let result = []

const flatten = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i])
    } else {
      result.push(array[i])
    }
  }

  return result
}

const biggestFollower = function (input) {
  let inputKeys = Object.keys(input)
  let followers = []
  let biggestFollower = {}

  for (const key of inputKeys) {
    followers.push(input[key].follows)
  }

  followers = flatten(followers)

  for (const follow of followers) {
    console.log(input[follow].name)
    if (!biggestFollower[input[follow].name]) {
      biggestFollower[input[follow].name] = 1
    }

    biggestFollower[input[follow].name] += 1
  }

  console.log(biggestFollower)
}

console.log(biggestFollower(data))

const mostPopular = function (input) {
  let popular = ''

  return popular
}

console.log(mostPopular(data))

const printAll = function (data) {}

const unrequitedFollowers = function (data) {}

const over30Followers = function (data) {}

const followsOver30 = function (data) {}

const findReachOfAll = function (data) {}
