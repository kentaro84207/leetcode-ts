import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { maxSequence } from "./maximum-subarray-sum.ts";

Deno.test("Maximum subarray sum", () => {
  assertEquals(maxSequence([]), 0);
  assertEquals(
    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
    6,
  );
});
