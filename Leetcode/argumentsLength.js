/*
  Problem - Write a function argumentsLength that returns the count of arguments passed to it.
*/

const arguments = require('.../inputs');

const argumentsLength = (...args) => args?.length || 0;

console.log(argumentsLength(...arguments));