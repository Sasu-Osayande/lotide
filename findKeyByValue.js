const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};



//Test Code

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const dishesInCuisine = { 
  mexican: "tacos",
  thai: "pad thai",
  italian: "spaghetti"
};

assertEqual(findKeyByValue(dishesInCuisine, "pad thai"), "thai");
assertEqual(findKeyByValue(dishesInCuisine, "tamales"), undefined);

module.exports = findKeyByValue;