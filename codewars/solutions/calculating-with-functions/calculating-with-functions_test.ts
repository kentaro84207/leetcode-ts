import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as module from "./calculating-with-functions.ts";

Deno.test("Calculating with Functions", () => {
  assertEquals(
    module.seven(module.times(module.five())),
    35,
  );
  assertEquals(
    module.four(module.plus(module.nine())),
    13,
  );
  assertEquals(
    module.eight(module.minus(module.three())),
    5,
  );
  assertEquals(
    module.six(module.dividedBy(module.two())),
    3,
  );
});
