/*
  Problem - Given an array of asynchronous functions functions, return a new promise.
  Each function in the array accepts no arguments and returns a promise.
  All the promises should be executed in parallel.

  promise resolves: When all the promises returned from functions were resolved successfully in parallel.
  The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.
  The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
  
  promise rejects: When any of the promises returned from functions were rejected.
  promise should also reject with the reason of the first rejection.
  
  Please solve it without using the built-in Promise.all function.
*/

const promiseAll = async (fns) => {
  return new Promise((resolve, reject) => {
    const promises = new Array(fns.length);
    let successfulCount = 0;
    for (let i = 0; i < fns.length; i++) {
      const fn = fns[i];
      fn().then((data) => {
        promises[i] = data;
        successfulCount++;
        if (successfulCount === fns.length) {
          resolve(promises);
        }
      }).catch(reject);
    }
  });
};

/*
promiseAll([
  () => new Promise((res) => setTimeout(() => res(200), 200)),
  () => new Promise((res) => setTimeout(() => res(150), 150)),
]).then(console.log).catch(console.error);
*/