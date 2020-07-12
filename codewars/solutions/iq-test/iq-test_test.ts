import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { iqTest } from "./iq-test.ts";

Deno.test("IQ Test", () => {
  assertEquals(iqTest("2 4 7 8 10"), 3);
  assertEquals(iqTest("1 2 2"), 1);
});
