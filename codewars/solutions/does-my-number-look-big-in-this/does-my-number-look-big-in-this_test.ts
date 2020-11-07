import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { narcissistic } from "./does-my-number-look-big-in-this.ts";

Deno.test("Narcissistic Function", () => {
  assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
  assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
});
