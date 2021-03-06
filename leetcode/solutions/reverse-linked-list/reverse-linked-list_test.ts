import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { reverseListIterative, reverseListStack } from './reverse-linked-list.ts';
import { CreateListNode } from '../../../datastructure/LinkedList/ListNode.ts';

Deno.test('206. Reverse Linked List - Iterative', () => {
  assertEquals(
    reverseListIterative(CreateListNode([1, 2, 3, 4, 5])),
    CreateListNode([5, 4, 3, 2, 1])
  );
  assertEquals(
    reverseListIterative(CreateListNode([1, 2])),
    CreateListNode([2, 1])
  );
  assertEquals(reverseListIterative(CreateListNode([])), CreateListNode([]));
});

Deno.test('206. Reverse Linked List - Stack', () => {
  assertEquals(
    reverseListStack(CreateListNode([1, 2, 3, 4, 5])),
    CreateListNode([5, 4, 3, 2, 1])
  );
  assertEquals(reverseListStack(CreateListNode([1, 2])), CreateListNode([2, 1]));
  assertEquals(reverseListStack(CreateListNode([])), CreateListNode([]));
});
