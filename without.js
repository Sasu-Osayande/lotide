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

const without = function(source, itemsToRemove) {
  let newArray = source.slice();
  for (let i = 0; i < itemsToRemove.length; i++) {
    let indexToRemove = source.indexOf(itemsToRemove[i]);
    if (indexToRemove !== -1) {
      newArray.splice(indexToRemove, 1);
    }
  }
  console.log(newArray);
  return newArray;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const someArray = [1, 2, 3];
const resultedArray = without(someArray, [1]);
assertArraysEqual(resultedArray, [2, 3]);

without([1, 2, 3], [1]);
without(["1", "2", "3"], ["1", 2, 3]);
without([2, 4, 6], [6, 2, 4]);
without([1, 2, 3], [4, 5, 6]);
