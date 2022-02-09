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
  if (eqArrays(firstArray, secondArray) === false) {
    console.log(`❌❌❌ Assertion failed: ${firstArray} != ${secondArray}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${firstArray} = ${secondArray}`);
  }
};

const middle = function(array) {
  let middleArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length > 2 && array.length % 2 !== 0) {
      return [middleArray = array[Math.floor(array.length / 2)]];
    } else if (array.length > 2 && array.length % 2 === 0) {
      return [middleArray = array[(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
    }
    return middleArray;
  }
};


// Test Code

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);