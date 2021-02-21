import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { numUniqueEmails } from './unique-email-addresses.ts';

Deno.test('929. Unique Email Addresses', () => {
  assertEquals(
    numUniqueEmails([
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ]),
    2
  );
  assertEquals(
    numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']),
    3
  );
});
