import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { decodeMorse } from "./decode-the-morse-code.ts";

Deno.test("Decode the Morse code", () => {
  assertEquals(
    decodeMorse(".... . -.--   .--- ..- -.. ."),
    "HEY JUDE",
  );
  assertEquals(
    decodeMorse("... --- ..."),
    "SOS",
  );
});
