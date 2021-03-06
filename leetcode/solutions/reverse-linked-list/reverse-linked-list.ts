// https://leetcode.com/problems/reverse-linked-list/
// Iterative
import ListNode from '../../../datastructure/LinkedList/ListNode.ts';

export const reverseList = (head: ListNode<number> | null): ListNode<number> | null => {
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
