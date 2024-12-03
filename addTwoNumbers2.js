/*
  Problem - You are given two non-empty linked lists representing two non-negative integers.
  The most significant digit comes first and each of their nodes contains a single digit.
  Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
  let num1 = '', num2 = '';
  while (l1) {
    num1 += l1.val;
    l1 = l1.next;
  }

  while (l2) {
    num2 += l2.val;
    l2 = l2.next;
  }

  const sum = `${BigInt(num1) + BigInt(num2)}`;
  const head = new ListNode();
  let curr = head;

  for (let digit of sum) {
    curr.next = new ListNode(Number(digit));
    curr = curr.next;
  }

  return head.next;
};