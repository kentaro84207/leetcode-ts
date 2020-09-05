import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { towerBuilder } from "./build-tower.ts";

Deno.test("Build Tower", () => {
  assertEquals(towerBuilder(1), ["*"]);
  assertEquals(towerBuilder(2), [" * ", "***"]);
  assertEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);
});
