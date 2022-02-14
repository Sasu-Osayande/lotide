const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const emptyTail = tail(["Hey"]);
assertEqual(tail(emptyTail).length, 0);

const emptyArray = tail([]);
assertEqual(tail(emptyArray).length, 0);