/*
  Problem - Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths.
  If it is impossible to form any triangle of a non-zero area, return 0.
*/

// sum of any 2 sides of a triangle is greater than the last side

const largestPerimeter = (nums) => {
  nums.sort((a, b) => a - b);

  const len = nums.length;
  for (let i = len - 1; i >= 2; i--) {
    // sum of third last and second last sides must be greater than the last side
    if (nums[i - 2] + nums[i - 1] > nums[i]) {
      return nums[i] + nums[i - 1] + nums[i - 2];
    }
  }

  return 0;
};