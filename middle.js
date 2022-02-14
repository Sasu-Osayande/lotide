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

module.exports = middle;