import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { tickets } from "./vasya-clerk.ts";

Deno.test("Vasya-Clerk", () => {
  assertEquals(tickets([25, 25, 50, 50]), "YES");
  assertEquals(tickets([25, 100]), "NO");
  assertEquals(
    tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 100, 100]),
    "NO",
  );
  assertEquals(
    tickets(
      [
        25,
        50,
        25,
        100,
        25,
        25,
        25,
        100,
        25,
        25,
        25,
        100,
        25,
        25,
        25,
        100,
        25,
        50,
        25,
        100,
      ],
    ),
    "YES",
  );
  assertEquals(
    tickets([25, 50, 25, 50, 100, 25, 25, 50]),
    "NO",
  );
});
