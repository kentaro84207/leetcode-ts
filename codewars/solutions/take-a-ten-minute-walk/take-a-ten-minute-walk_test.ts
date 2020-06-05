import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isValidWalk } from "./take-a-ten-minute-walk.ts";

Deno.test("Take a Ten Minute Walk", () => {
  assertEquals(
    isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
    true,
  );
  assertEquals(
    isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
    false,
  );
  assertEquals(isValidWalk(["w"]), false);
  assertEquals(
    isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
    false,
  );
});
