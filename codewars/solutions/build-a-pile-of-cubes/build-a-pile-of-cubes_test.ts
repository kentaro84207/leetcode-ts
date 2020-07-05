import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { findNb } from "./build-a-pile-of-cubes.ts";

Deno.test("Build a pile of Cubes", () => {
  assertEquals(findNb(4183059834009), 2022)
  assertEquals(findNb(24723578342962), -1)
  assertEquals(findNb(135440716410000), 4824)
  assertEquals(findNb(40539911473216), 3568)
});
