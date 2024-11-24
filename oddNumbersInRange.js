/*
  Problem - Given two non-negative integers low and high.
  Return the count of odd numbers between low and high (inclusive).
*/

const isOdd = (num) => {
  return num % 2 !== 0;
};

const countOdds = (low, high) => {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (isOdd(i)) {
      count++;
    }
  }
  return count;
};