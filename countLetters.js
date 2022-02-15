const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  const newString = string.replaceAll(" ", "");

  for (const letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
}

const sentence = "lighthouse in the house";
const result1 = countLetters(sentence);

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);

const anotherSentence = "Lighthouse labs";
const result2 = countLetters(anotherSentence);

assertEqual(result2["L"], 1);
assertEqual(result2["i"], 1);
assertEqual(result2["g"], 1);
assertEqual(result2["h"], 2);
assertEqual(result2["t"], 1);
assertEqual(result2["o"], 1);
assertEqual(result2["u"], 1);
assertEqual(result2["s"], 2);
assertEqual(result2["e"], 1);
assertEqual(result2["l"], 1);
assertEqual(result2["a"], 1);
assertEqual(result2["b"], 1);

module.exports = countLetters;