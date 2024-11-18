/*
  Problem - An array is monotonic if it is either monotone increasing or monotone decreasing.

  An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

  Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/

const isMonotonic = (nums) => {
  if (nums?.length <= 1) {
    return true;
  }

  let status = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      if (!status) {
        status = 1;
      } else if (status < 0) {
        return false;
      }
    } else if (nums[i] < nums[i - 1]) {
      if (!status) {
        status = -1;
      } else if (status > 0) {
        return false;
      }
    }
  }

  return true;
};