import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { deleteNth } from "./delete-occurrences-of-an-element.ts";

Deno.test("Delete occurrences of an element if it occurs more than n times", () => {
  assertEquals(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
  assertEquals(
    deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
    [1, 1, 3, 3, 7, 2, 2, 2],
  );
});
