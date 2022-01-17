const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail(["Hello", "Lighthouse", "Labs"], ["Lighthouse", "Labs"]));
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"].length, 3), true);
