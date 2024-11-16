/*
  Problem - You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
  The digits are ordered from most significant to least significant in left-to-right order.
  The large integer does not contain any leading 0's.

  Increment the large integer by one and return the resulting array of digits.
*/

const plusOne = (digits) => {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    const digit = sum % 10;
    digits[i] = digit;
    carry = Math.floor(sum / 10);
    if (!carry) {
      return digits;
    }
  }
  if (carry) {
    digits.unshift(1);
  }
  return digits;
};