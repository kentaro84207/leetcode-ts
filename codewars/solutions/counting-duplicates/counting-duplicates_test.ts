import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { duplicateCount } from "./counting-duplicates.ts";

Deno.test("Counting Duplicates", () => {
  assertEquals(duplicateCount(""), 0);
  assertEquals(duplicateCount("abcde"), 0);
  assertEquals(duplicateCount("aabbcde"), 2);
  assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
  assertEquals(duplicateCount("Indivisibility"), 1);
  assertEquals(
    duplicateCount("Indivisibilities"),
    2,
    "characters may not be adjacent",
  );
});
