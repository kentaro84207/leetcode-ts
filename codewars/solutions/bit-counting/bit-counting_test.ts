import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { countBits } from "./bit-counting.ts";

Deno.test("Tribonacci Sequence", () => {
  assertEquals(countBits(0), 0);
  assertEquals(countBits(4), 1);
  assertEquals(countBits(7), 3);
  assertEquals(countBits(9), 2);
  assertEquals(countBits(10), 2);
});
