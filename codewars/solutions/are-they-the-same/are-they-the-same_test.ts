import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { comp } from "./are-they-the-same.ts";

Deno.test("Are they the same?", () => {
  assertEquals(
    comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
    ),
  true);
  assertEquals(
    comp(
      [],
      [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
    ),
  false);
  assertEquals(
    comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      []
    ),
  false);
  assertEquals(
    comp(
      [ 2, 2, 3 ],
      [ 4, 9, 9 ]
    ),
  false);
});
