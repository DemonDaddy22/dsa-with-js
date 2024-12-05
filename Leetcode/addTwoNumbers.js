/*
  Problem - You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order, and each of their nodes contains a single digit.
  Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
  const res = new ListNode();
  let temp = res, carry = 0, sum = 0;

  while (l1 && l2) {
    sum = l1.val + l2.val + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    temp.next = new ListNode(sum);
    temp = temp.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    sum = l1.val + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    temp.next = new ListNode(sum);
    temp = temp.next;
    l1 = l1.next;
  }

  while (l2) {
    sum = l2.val + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    temp.next = new ListNode(sum);
    temp = temp.next;
    l2 = l2.next;
  }

  if (carry) {
    temp.next = new ListNode(carry);
    temp = temp.next;
  }

  return res.next;
};