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

const biggestFollower = function (input) {
  let inputKeys = Object.keys(input)
  let biggestFollowerFollows = 0
  let biggestFollowerName

  for (const key of inputKeys) {
    if (input[key].follows.length > biggestFollowerFollows) {
      biggestFollowerFollows = input[key].follows.length
      biggestFollowerName = input[key].name
    }
  }

  return `The person who follows the most other people is: ${biggestFollowerName}`
}

console.log(biggestFollower(data))

const mostPopular = function (input) {
  let inputKeys = Object.keys(input)
  let mostPopularPeople = {}
  let follows = []

  for (const key of inputKeys) {
    follows.push(input[key].follows)
  }

  for (const array of follows) {
    for (const id of array) {
      if (!mostPopularPeople[input[id].name]) {
        mostPopularPeople[input[id].name] = 1
      } else {
        mostPopularPeople[input[id].name] += 1
      }
    }
  }

  let mostPopularPerson = {}
  let mostPopularPeopleKeys = Object.keys(mostPopularPeople)
  let mostFollows = 0

  for (const key of mostPopularPeopleKeys) {
    if (mostPopularPeople[key] > mostFollows)
      mostFollows = mostPopularPeople[key]
  }

  for (const key of mostPopularPeopleKeys) {
    if (mostPopularPeople[key] === mostFollows) {
      if (!mostPopularPerson.name) {
        mostPopularPerson.name = [key]
      } else {
        mostPopularPerson.name.push(key)
      }
    }
  }

  if (mostPopularPerson.name.length > 1) {
    let people = []

    for (let i = 0; i < mostPopularPerson.name.length; i++) {
      people.push(mostPopularPerson.name[i])
    }

    return `There was a ${
      mostPopularPerson.name.length
    } person tie for most popular with the following people: ${people.join(
      ', '
    )}.`
  }

  return `The most popular person was ${mostPopularPerson.name}.`
}

console.log(mostPopular(data))

const printAll = function (input) {
  let print = {}
  let inputKeys = Object.keys(input)

  for (const id of inputKeys) {
    if (!print[input[id].name]) {
      print[input[id].name] = {}
    }

    if (!print[input[id].name]['followed-by']) {
      print[input[id].name]['followed-by'] = []
    }

    if (!print[input[id].name]['follows']) {
      print[input[id].name]['follows'] = []
    }

    for (const follows of input[id].follows) {
      print[input[id].name]['follows'].push(input[follows].name)

      if (!print[input[follows].name]) {
        print[input[follows].name] = {}
      }

      if (!print[input[follows].name]['followed-by']) {
        print[input[follows].name]['followed-by'] = []
      }

      print[input[follows].name]['followed-by'].push(input[id].name)
    }
  }

  return print
}

console.log(printAll(data))

const unrequitedFollowers = function (data) {}

const over30Followers = function (data) {}

const followsOver30 = function (data) {}

const findReachOfAll = function (data) {}
