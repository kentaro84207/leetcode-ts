import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { dirReduc } from "./directions-reduction.ts";

Deno.test("Directions Reduction", () => {
  assertEquals(
    dirReduc(
      ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
    ),
    ["WEST"],
  );
  assertEquals(
    dirReduc(
      ["NORTH", "WEST", "SOUTH", "EAST"],
    ),
    ["NORTH", "WEST", "SOUTH", "EAST"],
  );
  assertEquals(
    dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
    [],
  );
});
