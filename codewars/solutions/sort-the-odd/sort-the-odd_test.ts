import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { sortArray } from "./sort-the-odd.ts";

Deno.test("Sort the odd", () => {
  assertEquals(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
  assertEquals(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
  assertEquals(sortArray([]), []);
});
