import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { longestConsec } from "./consecutive-strings.ts";

Deno.test("Consecutive strings", () => {
  assertEquals(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
    "abigailtheta",
  );
  assertEquals(
    longestConsec(
      [
        "ejjjjmmtthh",
        "zxxuueeg",
        "aanlljrrrxx",
        "dqqqaaabbb",
        "oocccffuucccjjjkkkjyyyeehh",
      ],
      1,
    ),
    "oocccffuucccjjjkkkjyyyeehh",
  );
  assertEquals(longestConsec([], 3), "");
  assertEquals(
    longestConsec(
      [
        "itvayloxrp",
        "wkppqsztdkmvcuwvereiupccauycnjutlv",
        "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
      ],
      2,
    ),
    "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck",
  );
  assertEquals(
    longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2),
    "wlwsasphmxxowiaxujylentrklctozmymu",
  );
  assertEquals(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
    "",
  );
  assertEquals(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3),
    "ixoyx3452zzzzzzzzzzzz",
  );
  assertEquals(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15),
    "",
  );
  assertEquals(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0),
    "",
  );
});
