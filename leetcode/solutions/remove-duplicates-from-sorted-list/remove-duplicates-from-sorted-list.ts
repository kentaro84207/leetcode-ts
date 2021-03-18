// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
import ListNode from '../../../datastructure/LinkedList/ListNode.ts';

export const deleteDuplicates = (
  head: ListNode<number> | null
): ListNode<number> | null => {
  let current: ListNode<number> | null = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
