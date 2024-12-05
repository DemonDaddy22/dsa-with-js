/*
  Problem - Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

  You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/*
When multiplying 2 numbers, maximum number of digits in the result will be equal to sum of digits in input numbers.
We can represent the result as an array of same size with highest digit at 0th index
We multiply each digit of each number with each other,
product of which would be placed at position i + j, i + j + 1
*/

const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  const product = Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const x = i + j, y = i + j + 1;
      const res = Number(num1[i]) * Number(num2[j]) + product[y];
      product[y] = res % 10;
      product[x] += Math.floor(res / 10);
    }
  }
  if (!product[0]) {
    return product.slice(1).join('');
  }
  return product.join('');
};