const eqArrays = require("./eqArrays");

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === false) {
    console.log(`❌❌❌ Assertion failed: ${firstArray} != ${secondArray}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${firstArray} = ${secondArray}`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

mmodule.exports = assertArraysEqual;