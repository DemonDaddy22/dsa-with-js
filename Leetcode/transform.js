/*
  Problem - Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
  The returned array should be created such that returnedArray[i] = fn(arr[i], i).
  Please solve it without the built-in Array.map method.
*/

const args = require('../inputs');
const [array, func] = args;

const transform = (arr, fn) => {
  const transformedArray = [];
  for (let val of arr) {
    transformedArray.push(fn(val));
  }
  return transformedArray;
};

// console.log(transform(JSON.parse(array), eval(func)));