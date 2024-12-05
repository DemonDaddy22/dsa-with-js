/*
  Problem - Given two non-negative integers low and high.
  Return the count of odd numbers between low and high (inclusive).
*/

const isOdd = (num) => {
  return num % 2 !== 0;
};

const countOdds = (low, high) => {
  if (isOdd(low) && isOdd(high)) {
    return (high - low) / 2 + 1;
  }
  return Math.ceil((high - low) / 2);
};