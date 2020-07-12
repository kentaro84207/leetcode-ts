import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { orderWeight } from "./weight-for-weight.ts";

Deno.test("Weight for weight", () => {
  assertEquals(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99");
  assertEquals(
    orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"),
    "11 11 2000 10003 22 123 1234000 44444444 9999",
  );
});
