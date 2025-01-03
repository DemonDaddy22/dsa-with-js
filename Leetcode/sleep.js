/*
  Problem - Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
  It can resolve any value.
*/

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};