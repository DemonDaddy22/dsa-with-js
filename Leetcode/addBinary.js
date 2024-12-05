/*
  Problem - Given two binary strings a and b, return their sum as a binary string.
*/

const arguments = require('../inputs');
const [binary1, binary2] = arguments;

let carry = 0;

const getSum = (num1, num2) => {
  const sum = num1 + num2 + carry;
  carry = Math.floor(sum / 2);
  return sum % 2;
};

const addBinary = (a, b) => {
  const reversedA = a.split('').reverse().join('');
  const reversedB = b.split('').reverse().join('');

  carry = 0;
  let res = '', i = 0, j = 0;
  while (i < reversedA.length && j < reversedB.length) {
    const num1 = Number(reversedA[i++]), num2 = Number(reversedB[j++]);
    const sum = getSum(num1, num2);
    res += sum;
  }
  while (i < reversedA.length) {
    const num = Number(reversedA[i++]);
    const sum = getSum(num, 0);
    res += sum;
  }
  while (j < reversedB.length) {
    const num = Number(reversedB[j++]);
    const sum = getSum(num, 0);
    res += sum;
  }
  if (carry) {
    res += carry;
  }
  return res.split('').reverse().join('');
};

console.log(addBinary(binary1, binary2));