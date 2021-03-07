import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { maxSubArray } from "./maximum-subarray.ts";

Deno.test("53. Maximum Subarray", () => {
  assertEquals(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);
  assertEquals(maxSubArray([1]), 1);
  assertEquals(maxSubArray([0]), 0);
  assertEquals(maxSubArray([-1]), -1);
  assertEquals(maxSubArray([-100000]), -100000);
});
