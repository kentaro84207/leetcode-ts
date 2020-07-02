import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { queueTime } from "./the-supermarket-queue.ts";

Deno.test("The Supermarket Queue", () => {
  assertEquals(queueTime([], 1), 0);
  assertEquals(queueTime([1, 2, 3, 4], 1), 10);
  assertEquals(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
  assertEquals(queueTime([1, 2, 3, 4, 5], 100), 5);
});
