const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

console.log('testing eqObjects');

assertEqual(eqObjects({ a: "1", b: "2" },{ b: "2", a: "1" }),true);
assertEqual(eqObjects({ a: "1", b: "2" },{ a: "1", b: "2", c: "3" }),false);
assertEqual(eqObjects({ c: "1", d: ["2", 3] },{ d: ["2", 3], c: "1" }),true);
assertEqual(eqObjects({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3, 4] }),false);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 },{ a: { z: 1 }, b: 2 }),true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 },{ a: { z: 1 }, b: 2 }),false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 },{ a: 1, b: 2 }),false);
