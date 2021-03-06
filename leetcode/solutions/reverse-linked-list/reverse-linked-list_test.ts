import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { reverseList } from './reverse-linked-list.ts';
import { CreateListNode } from '../../../datastructure/LinkedList/ListNode.ts';

Deno.test('206. Reverse Linked List', () => {
  assertEquals(
    reverseList(CreateListNode([1, 2, 3, 4, 5])),
    CreateListNode([5, 4, 3, 2, 1])
  );
  assertEquals(reverseList(CreateListNode([1, 2])), CreateListNode([2, 1]));
  assertEquals(reverseList(CreateListNode([])), CreateListNode([]));
});
