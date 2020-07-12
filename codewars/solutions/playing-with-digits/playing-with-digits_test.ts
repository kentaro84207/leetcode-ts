import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { digPow } from "./playing-with-digits.ts";

Deno.test("Calculating with Functions", () => {
  assertEquals(digPow(89, 1), 1);
  assertEquals(digPow(92, 1), -1);
  assertEquals(digPow(46288, 3), 51);
});
