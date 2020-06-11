import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { order } from "./your-order-please.ts";

Deno.test("Your order, please", () => {
  assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
  assertEquals(
    order("4of Fo1r pe6ople g3ood th5e the2"),
    "Fo1r the2 g3ood 4of th5e pe6ople",
  );
  assertEquals(order(""), "");
});
