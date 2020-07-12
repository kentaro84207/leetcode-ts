import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { twoSum } from "./two-sum.ts";

Deno.test("1. Two Sum", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum([2, 7, 11, 15], 22), [1, 3]);
});
