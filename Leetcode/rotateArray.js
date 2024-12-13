/*
  Problem - Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

const rotate = (nums, k) => {
  const len = nums.length;
  k %= len;
  nums.unshift(...nums.splice(len - k));
};