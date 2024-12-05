/*
  Promise - Given two promises promise1 and promise2, return a new promise.
  promise1 and promise2 will both resolve with a number.
  The returned promise should resolve with the sum of the two numbers.
*/

const addTwoPromises = async (promise1, promise2) => {
  return new Promise(async (resolve) => {
    const [data1, data2] = await Promise.all([promise1, promise2]);
    resolve(data1 + data2);
  });
};

/*
const p1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const p2 = new Promise(resolve => setTimeout(() => resolve(5), 10));

addTwoPromises(p1, p2).then(console.log);
*/