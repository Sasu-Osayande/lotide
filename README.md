# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sasu.osayande/lotide`

**Require it:**

`const _ = require('@sasu.osayande/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `const assertArraysEqual = function(array1, array2)` : used in conjunction with eqArrays to evaluate two arrays.

* `const assertEqual = function(actual, expected)` : implemented our own assert function.

* `const assertObjectsEqual = function(actual, expected)` : assertion to help us test functions that return objects.

* `const countLetters = function (sentence)` : used to return a count of letters in a given string.

* `const countOnly = function(allItems, itemsToCount)` : used to return an object containing counts of the input object from an array.

* `const eqArrays = function(array1, array2)` : used to compare two arrays.

* `const eqObjects = function(object1, object2)` : used to compare two objects.

* `const findKey = function(object, callback)` : used to return the first key for which a callback function returns a truthy value.

* `const findKeyByValue = function(object, value)` : used to return a key by inputing the value of that key.

* `const head = function(first)` : retrieves the first element in an array.

* `const letterPositions = function(sentence)` : used to return an array of indices of a character in a string.

* `const map = function(mapArray, callbackFn)` : implemented our own version of map().

* `const middle = function(array)` : retrieves the middle-most elements of a given array.

* `const tail = function(minusHead)` : returns a new array without the first element ("head") of the original array.

* `const takeUntil = function(array, callback)` : returns a slice of an array, stopping/excluding the element equal to the callback fn.

* `const without = function(source, itemsToRemove)` : removes elements from the first array that are found in the second array.