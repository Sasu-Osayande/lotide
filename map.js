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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1.length, 5);
assertArraysEqual(Array.isArray(results1), true)

module.exports = map;