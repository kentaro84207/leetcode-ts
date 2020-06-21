import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { songDecoder } from "./dubstep.ts";

Deno.test("Dubstep", () => {
  assertEquals(
    songDecoder("AWUBBWUBC"),
    "A B C",
    "WUB should be replaced by 1 space",
  );
  assertEquals(
    songDecoder("AWUBWUBWUBBWUBWUBWUBC"),
    "A B C",
    "multiples WUB should be replaced by only 1 space",
  );
  assertEquals(
    songDecoder("WUBAWUBBWUBCWUB"),
    "A B C",
    "heading or trailing spaces should be removed",
  );
});
