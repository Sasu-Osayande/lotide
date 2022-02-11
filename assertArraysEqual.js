const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray.length !== secondArray.length) {
      return false;
    }
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === false) {
    console.log(`❌❌❌ Assertion failed: ${firstArray} != ${secondArray}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${firstArray} = ${secondArray}`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));