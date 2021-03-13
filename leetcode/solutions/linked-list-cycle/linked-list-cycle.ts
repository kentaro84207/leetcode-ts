// https://leetcode.com/problems/linked-list-cycle/
import ListNode from '../../../datastructure/LinkedList/ListNode.ts';

export const hasCycleHashList = (head: ListNode<number> | null): boolean => {
  const hash = new Set<ListNode<number> | null>();
  while (head) {
    if (hash.has(head)) return true;
    hash.add(head);
    head = head.next;
  }
  return false;
};

export const hasCycleTwoPointers = (head: ListNode<number> | null): boolean => {
  let slow = head;
  let fast = head;
  while (slow && fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
