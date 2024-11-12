/*
  Problem - Given a function fn, return a memoized version of that function.

  A memoized function is a function that will never be called twice with the same inputs.
  Instead it will return a cached value.

  You can assume there are 3 possible input functions: sum, fib, and factorial.

  sum accepts two integers a and b and returns a + b.
  Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
  
  fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
  
  factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = `${fn}:${args}`;
    if (key) {
      if (!(key in cache)) {
        cache[key] = fn(...args);
      }
      return cache[key];
    }
  };
};

/*
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2));
console.log(memoizedSum(2, 1));
console.log(memoizedSum(1, 2));
*/

/*
const fib = (a) => {
  if (a <= 1) return a;
  return fib(a - 1) + fib(a - 2);
};
const memoizedFib = memoize(fib);
console.log(memoizedFib(2));
console.log(memoizedFib(5));
console.log(memoizedFib(2));
*/