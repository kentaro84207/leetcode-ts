import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { uniqueInOrder } from "./unique-in-order.ts";

Deno.test("Unique In Order", () => {
  assertEquals(
    uniqueInOrder("AAAABBBCCDAABBB"),
    ["A", "B", "C", "D", "A", "B"],
  );
  assertEquals(uniqueInOrder([1, 2, 3, 3]), [1, 2, 3]);
  assertEquals(uniqueInOrder(["a", "b", "b"]), ["a", "b"]);
});
