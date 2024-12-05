/*
  Problem - Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*/

const pow = (x, n) => {
  /*
  Takes O(n) to complete the calculation which would be
  inefficient in case the power is very large

  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = Math.abs(n);
  }
  return x * pow(x, n - 1);
  */

  /*
  In order to improve efficiency we will opt for Binary Exponentiation using which we can calculate xn using O log2(N) multiplications.
  Basic idea is to divide the work using binary representation of exponents
  i.e. is to keep multiplying res with x, if the bit is odd, and multiplying x with itself until we get 0
  */
  if (n < 0) {
    x = 1 / x;
    n = Math.abs(n);
  }

  let res = 1;
  while (n) {
    if ((n & 1) !== 0) { // if n is odd
      res *= x;
    }
    x *= x;
    n >>>= 1; // dividing power by 2
  }
  return res;
}