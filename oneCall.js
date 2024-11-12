/*
  Problem - Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

  The first time the returned function is called, it should return the same result as fn.
  Every subsequent time it is called, it should return undefined.
*/

const once = (fn) => {
  let isCalled = false;

  return (...args) => {
    if (isCalled) {
      return;
    }
    isCalled = true;
    return fn(...args);
  };
};

/*
const onceFn = once((x) => x * 2);
console.log(onceFn(5));
console.log(onceFn(6));
console.log(onceFn(0));
*/