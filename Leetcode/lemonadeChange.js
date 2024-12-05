/*
  Problem - At a lemonade stand, each lemonade costs $5.
  Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

  Note that you do not have any change in hand at first.

  Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.
  At a lemonade stand, each lemonade costs $5.
  Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills).
  Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
  You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

  Note that you do not have any change in hand at first.

  Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.
*/

const lemonadeChange = (bills) => {
  const BILLS = {
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
  };

  const billCount = {
    five: 0,
    ten: 0,
  };

  for (let bill of bills) {
    switch (bill) {
      case BILLS.FIVE:
        billCount.five += 1;
        break;
      case BILLS.TEN:
        if (!billCount.five) {
          return false;
        }
        billCount.ten += 1;
        billCount.five -= 1;
        break;
      case BILLS.TWENTY:
        if (!billCount.five) {
          return false;
        }
        if (!billCount.ten && billCount.five < 3) {
          return false;
        }
        billCount.five = billCount.ten ? billCount.five - 1 : billCount.five - 3;
        billCount.ten = billCount.ten ? billCount.ten - 1 : 0;
        break;
      default:
        break;
    }
  }

  return true;
};