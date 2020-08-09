import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { findMissingLetter } from "./find-the-missing-letter.ts";

Deno.test("Find the missing letter", () => {
  assertEquals(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
  assertEquals(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
});
