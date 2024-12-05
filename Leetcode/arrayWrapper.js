/*
  Problem - Create a class ArrayWrapper that accepts an array of integers in its constructor.
  This class should have two features:

  When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.

  When the String() function is called on the instance, it will return a comma separated string surrounded by brackets.
  For example, [1,2,3].
*/

class ArrayWrapper {
  nums;

  constructor(nums) {
    this.nums = nums;
  }
}

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join()}]`;
}

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((accu, curr) => accu += curr, 0);
}

/*
const arr1 = new ArrayWrapper([1, 2, 3]);
const arr2 = new ArrayWrapper([6, 5, 4]);

console.log(arr1.toString());
console.log(arr2.toString());
console.log(arr1 + arr2);
*/