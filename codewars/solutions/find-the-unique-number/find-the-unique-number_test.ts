import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { findUniq } from "./find-the-unique-number.ts";

Deno.test("Find the unique number", () => {
  assertEquals(findUniq([0, 1, 0]), 1);
  assertEquals(findUniq([1, 1, 1, 2, 1, 1]), 2);
  assertEquals(findUniq([3, 10, 3, 3, 3]), 10);
});
