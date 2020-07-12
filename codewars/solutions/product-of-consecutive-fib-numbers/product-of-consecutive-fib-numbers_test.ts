import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { productFib } from "./product-of-consecutive-fib-numbers.ts";

Deno.test("Product of consecutive Fib numbers", () => {
  assertEquals(productFib(4895), [55, 89, true]);
  assertEquals(productFib(5895), [89, 144, false]);
  assertEquals(productFib(74049690), [6765, 10946, true]);
  assertEquals(productFib(84049690), [10946, 17711, false]);
  assertEquals(productFib(193864606), [10946, 17711, true]);
  assertEquals(productFib(447577), [610, 987, false]);
  assertEquals(productFib(602070), [610, 987, true]);
});
