// https://leetcode.com/problems/reverse-linked-list/
import ListNode from '../../../datastructure/LinkedList/ListNode.ts';

export const reverseListIterative = (
  head: ListNode<number> | null
): ListNode<number> | null => {
  let prevNode: ListNode<number> | null = null;
  let headNode: ListNode<number> | null = head;
  while (headNode !== null) {
    const nextNode: ListNode<number> | null = headNode.next;
    headNode.next = prevNode;
    prevNode = headNode;
    headNode = nextNode;
  }
  return prevNode;
};

export const reverseListStack = (
  head: ListNode<number> | null
): ListNode<number> | null => {
  if (head === null) return null;
  const stack = [];
  while (head !== null) {
    stack.push(head);
    head = head.next;
  }
  let current = stack.pop()!;
  head = current;
  while (stack.length > 0) {
    current.next = stack.pop()!;
    current = current.next;
  }
  current.next = null;
  return head;
};
