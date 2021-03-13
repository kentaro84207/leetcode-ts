import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { hasCycleHashList, hasCycleTwoPointers } from './linked-list-cycle.ts';
import { CreateListNode } from '../../../datastructure/LinkedList/ListNode.ts';

Deno.test('141. Linked List Cycle - HashList', () => {
  const linkedListNode1 = CreateListNode([3, 2, 0, 4]);
  linkedListNode1!.next!.next!.next = linkedListNode1!.next;
  assertEquals(hasCycleHashList(linkedListNode1), true);

  const linkedListNode2 = CreateListNode([1, 2]);
  linkedListNode2!.next!.next = linkedListNode2!.next;
  assertEquals(hasCycleHashList(linkedListNode2), true);

  const linkedListNode3 = CreateListNode([1]);
  linkedListNode3!.next = linkedListNode3;
  assertEquals(hasCycleHashList(linkedListNode3), true);

  assertEquals(hasCycleHashList(CreateListNode([3, 2, 0, 4])), false);
});

Deno.test('141. Linked List Cycle - TwoPointers', () => {
  const linkedListNode1 = CreateListNode([3, 2, 0, 4]);
  linkedListNode1!.next!.next!.next = linkedListNode1!.next;
  assertEquals(hasCycleTwoPointers(linkedListNode1), true);

  const linkedListNode2 = CreateListNode([1, 2]);
  linkedListNode2!.next!.next = linkedListNode2!.next;
  assertEquals(hasCycleTwoPointers(linkedListNode2), true);

  const linkedListNode3 = CreateListNode([1]);
  linkedListNode3!.next = linkedListNode3;
  assertEquals(hasCycleTwoPointers(linkedListNode3), true);

  assertEquals(hasCycleTwoPointers(CreateListNode([3, 2, 0, 4])), false);
});
