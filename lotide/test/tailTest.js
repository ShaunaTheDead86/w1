const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

console.log('testing tail');

assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length,2);