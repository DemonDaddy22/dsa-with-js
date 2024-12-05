/*
  Problem - Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Note that you must do this in-place without making a copy of the array.
*/

const moveZeroes = (nums) => {
  let nonZeroIndex = 0, index = 0;
  while (nonZeroIndex < nums.length) {
    if (nums[nonZeroIndex] !== 0) {
      [nums[nonZeroIndex], nums[index]] = [nums[index], nums[nonZeroIndex]];
      break;
    }
    nonZeroIndex++;
  }

  if (nonZeroIndex === nums.length) {
    return;
  }

  index = nonZeroIndex + 1;
  nonZeroIndex = 0;
  while (index < nums.length) {
    if (nums[index] !== 0) {
      [nums[nonZeroIndex + 1], nums[index]] = [nums[index], nums[nonZeroIndex + 1]];
      nonZeroIndex++;
    }
    index++;
  }
};
