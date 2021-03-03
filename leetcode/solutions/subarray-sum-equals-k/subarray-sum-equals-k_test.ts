import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { subarraySum } from './subarray-sum-equals-k.ts';

Deno.test('560. Subarray Sum Equals K', () => {
  assertEquals(subarraySum([1, 1, 1], 2), 2);
  assertEquals(subarraySum([1, 2, 3], 3), 2);
  assertEquals(subarraySum([1, 2, 1, 2, 1], 3), 4);
  assertEquals(subarraySum([1], 0), 0);
  assertEquals(subarraySum([1, -1, 0], 0), 3);
});
