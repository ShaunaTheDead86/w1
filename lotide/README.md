# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shauna-empringham/lotide`

**Require it:**

`const _ = require('@shauna-empringham/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`  Takes 2 arrays as arguments and return true if they are equal, false if they are not.
* `assertEqual(...)`        Takes 2 primitive data type variables as arguments and return true if they are equal, false if they are not.
* `assertObjectsEqual(...)` Takes 2 objects as arguments and return true if they are equal, false if they are not.
* `countLetters(...)`       Takes a string as an argument and returns an object with each letter in the string as keys and the number of times that letter appears in the string as a property of the letter key.
* `countOnly(...)`          Takes 2 lists as arguments, the first list is what will be searched, the second list is the list of items to search for. Returns an object with keys of each item that was searched for and a property of how many times that key appeared in the searched list.
* `eqArrays(...)`           Takes 2 arrays as arguments and returns true if they are equal, false if they are not.
* `findKey(...)`            Takes an object to search as one argument and a callback function as the second argument. Searches the object using the callback function and returns the first key that satisfies the callback. 
* `findKeyByValue(...)`     Takes an object to search as one argument and a value to search for. Searches the properties of the object for a match with the passed in value and returns the key that matches that value or returns undefined if no value matched.
* `flatten(...)`            Takes an array as an argument and if it finds any nested arrays it will remove them and push the data to the parent array without losing any of the data stored in the nested arrays.
* `head(...)`               Takes an array as an argument and returns the first element of that array.
* `letterPositions(...)`    Takes a string as an argument and returns an object with each letter in the string as keys where the value is an array showing the index of every instance of that letter's position in the string.
* `map(...)`                Takes an array of values as an argument and a callback function. Iterates through the passed-in array and evalutes true or false based on the passed-in callback function. Returns an array of the true or false values that the callback function found.
* `middle(...)`             Takes an array of numbers and returns an array containing the value of the middle-most index of the passed-in array. If the passed-in array has an even number of indexes, it will return an array of the 2 middle-most numbers.
* `tail(...)`               Takes an array of values and returns the full array minus the first element of that array.
* `takeUntil(...)`          Takes an array of values as an argument and a callback function as another argument. Iterates through the passed-in array until the callback function returns true. Returns an array of all elements of the passed-in array that preceed the callback function returning true.
* `without(...)`            Takes 2 arrays are arguments. The first array is a list of values to search and the second array is a list of values to remove from the first array. Returns an array of values from the first array which did not match any value in the second array.