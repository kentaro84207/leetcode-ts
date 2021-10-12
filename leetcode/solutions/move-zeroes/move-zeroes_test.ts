import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { moveZeroes } from './move-zeroes.ts';

Deno.test('283. Move Zeroes', () => {
  assertEquals(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
  assertEquals(moveZeroes([0]), [0]);
});
