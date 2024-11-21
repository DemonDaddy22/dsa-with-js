/*
  Problem - You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
  Return the wealth that the richest customer has.

  A customer's wealth is the amount of money they have in all their bank accounts.
  The richest customer is the customer that has the maximum wealth.
*/

const maximumWealth = (accounts) => {
  let maxWealth = -1;
  for (let account of accounts) {
    const wealth = account.reduce((accu, curr) => accu += curr, 0);
    maxWealth = Math.max(maxWealth, wealth);
  }
  return maxWealth;
};