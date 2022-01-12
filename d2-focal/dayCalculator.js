function calculateDayInYear (date) {
  const splitDate = date.split('/')
  const year = Number(splitDate[0])
  const month = Number(splitDate[1])
  const day = Number(splitDate[2])

  const isLeapYear = function (year) {
    if (year % 4 === 0) {
      if (year % 100 !== 0) {
        return true
      } else {
        if (year % 400 === 0) {
          return true
        }
      }
    }
    return false
  }

  const daysInFeb = function (year) {
    if (isLeapYear(year)) return 29
    return 28
  }

  const DAYS_IN_MONTH = [
    31,
    daysInFeb(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]

  const validYear = function (year) {
    if (year > 0) return true
    return false
  }

  const validMonth = function (month) {
    if (month >= 1 || month <= 12) return true
    return false
  }

  const validDay = function (month, day) {
    if (day >= 1 || day <= DAYS_IN_MONTH[month - 1]) return true
    return false
  }

  const calculateDayNumber = function (month, day) {
    let dayOfYear = 0

    for (let i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1]
    }
    dayOfYear += day

    return dayOfYear
  }

  if (validYear(year) && validMonth(month) && validDay(month, day)) {
    console.log(
      date,
      'is day',
      calculateDayNumber(month, day),
      'of the year',
      year
    )
    return calculateDayNumber(month, day)
  } else {
    console.log('Invalid date')
  }
}

/*
    Below are some simple tests!

    They run the function with a predetermined parameter and compare the output to the value we are expecting to get!

    The console.log will output either 'true' or 'false' based on whether or not the function
    returns a value that matched our expected value.

    You'll know your code works correctly when all of these tests return 'true'.
*/
console.log('Tests:')
console.log('---------------')
console.log(calculateDayInYear('1900/3/2') === 61)
console.log(calculateDayInYear('2000/3/2') === 62)
console.log(calculateDayInYear('2012/2/29') === 60)
console.log(calculateDayInYear('2015/12/31') === 365)
