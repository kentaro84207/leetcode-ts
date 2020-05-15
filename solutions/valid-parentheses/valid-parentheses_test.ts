import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isValid } from './valid-parentheses.ts';

Deno.test('20. Valid Parentheses', () => {
  assertEquals(isValid('()'), true);
  assertEquals(isValid('()[]{}'), true);
  assertEquals(isValid('(]'), false);
  assertEquals(isValid('([)]'), false);
  assertEquals(isValid('{[]}'), true);
});
