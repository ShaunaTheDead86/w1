import { assertEqual } from "./assertEqual.js";

const tail = function (array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.join(" "), ["Lighthouse", "Labs"].join(" ")); 
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
