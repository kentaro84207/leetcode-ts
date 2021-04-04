import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { searchInsert, searchInsertBinarySearch } from "./search-insert-position.ts";

Deno.test("35. Search Insert Position", () => {
  assertEquals(searchInsert([1, 3, 5, 6], 5), 2);
  assertEquals(searchInsert([1, 3, 5, 6], 2), 1);
  assertEquals(searchInsert([1, 3, 5, 6], 7), 4);
  assertEquals(searchInsert([1, 3, 5, 6], 0), 0);
});

Deno.test("35. Search Insert Position - BinarySearch", () => {
  assertEquals(searchInsertBinarySearch([1, 3, 5, 6], 5), 2);
  assertEquals(searchInsertBinarySearch([1, 3, 5, 6], 2), 1);
  assertEquals(searchInsertBinarySearch([1, 3, 5, 6], 7), 4);
  assertEquals(searchInsertBinarySearch([1, 3, 5, 6], 0), 0);
});
