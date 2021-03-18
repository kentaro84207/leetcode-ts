import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { deleteDuplicates } from './remove-duplicates-from-sorted-list.ts';
import { CreateListNode } from '../../../datastructure/LinkedList/ListNode.ts';

Deno.test('83. Remove Duplicates from Sorted List', () => {
  assertEquals(
    deleteDuplicates(CreateListNode([1, 1, 2])),
    CreateListNode([1, 2])
  );
  assertEquals(
    deleteDuplicates(CreateListNode([1, 1, 2, 3, 3])),
    CreateListNode([1, 2, 3])
  );
});
