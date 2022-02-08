const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    } else if (firstArray[i] === secondArray[i]) {
      return true;
    }
  }
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion passed: ${firstArray} = ${secondArray}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${firstArray} != ${secondArray}`)
  }
};

assertArraysEqual();