/*
  Problem - A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

  Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression.
  Otherwise, return false.
*/

const canMakeArithmeticProgression = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  let difference = Math.abs(sortedArray[1] - sortedArray[0]);
  for (let i = 2; i < sortedArray.length; i++) {
    if (Math.abs(sortedArray[i] - sortedArray[i - 1]) !== difference) {
      return false;
    }
  }
  return true;
};