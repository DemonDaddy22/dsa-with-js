/*
  Problem - Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

const reverseList = (head) => {
  if (!head) {
    return head;
  }

  let prev = null, next = head.next;

  while (head) {
    head.next = prev;
    prev = head;
    head = next;
    if (next) {
      next = next.next;
    }
  }

  return prev;
};