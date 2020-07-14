import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { validBraces } from "./valid-braces.ts";

Deno.test("Valid Braces", () => {
  assertEquals(validBraces("()"), true);
  assertEquals(validBraces("[(])"), false);
});
