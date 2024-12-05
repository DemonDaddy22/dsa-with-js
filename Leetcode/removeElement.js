/*
  Problem - Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
  The order of the elements may be changed.
  Then return the number of elements in nums which are not equal to val.

  Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

  Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
  The remaining elements of nums are not important as well as the size of nums.
  Return k.
*/

const removeElement = (nums, val) => {
  const len = nums.length
  let k = len, i = len - 1, j = len - 1;
  while (i >= 0) {
    if (nums[i] === val) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      k--;
      j--;
    }
    i--;
  }
  return k;
};