import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { firstUniqChar } from './first-unique-character-in-a-string.ts';

Deno.test('387. First Unique Character in a String', () => {
  assertEquals(firstUniqChar('leetcode'), 0);
  assertEquals(firstUniqChar('loveleetcode'), 2);
  assertEquals(firstUniqChar('aadadaad'), -1);
});
