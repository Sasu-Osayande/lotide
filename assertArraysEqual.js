const eqArrays = require("./eqArrays");

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === false) {
    console.log(`❌❌❌ Assertion failed: ${firstArray} != ${secondArray}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${firstArray} = ${secondArray}`);
  }
};

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(assertArraysEqual([1, 2, 3], [4, 5, 6]));

module.exports = assertArraysEqual;