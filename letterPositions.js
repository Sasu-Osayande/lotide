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

const letterPositions = function(sentence) {
  const results = {};
  const newSentence = sentence.replaceAll(" ", "");

  for (let i = 0; i < sentence.length; i++) {
    if (!results[newSentence[i]]) {
      results[newSentence[i]] = [];
    }
    results[newSentence[i]].push(i);
  }
  return results;
};

const result1 = letterPositions("hello");
console.log(result1);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);