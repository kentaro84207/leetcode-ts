import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { groupAnagrams } from './group-anagrams.ts';

Deno.test('49. Group Anagrams', () => {
  assertEquals(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat'],
  ]);
  assertEquals(groupAnagrams(['']), [['']]);
  assertEquals(groupAnagrams(['a']), [['a']]);
});
