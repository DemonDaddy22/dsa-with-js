/*
  Problem - You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

  Return the average salary of employees excluding the minimum and maximum salary.
  Answers within 10-5 of the actual answer will be accepted.
*/

const average = (salary) => {
  let sum = 0, min = Infinity, max = -Infinity;
  for (let value of salary) {
    sum += value;
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  return (sum - min - max) / (salary.length - 2);
};