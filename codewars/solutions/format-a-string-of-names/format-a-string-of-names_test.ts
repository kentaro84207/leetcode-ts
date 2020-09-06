import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { list } from "./format-a-string-of-names.ts";

Deno.test("Build Tower", () => {
  assertEquals(
    list(
      [
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Homer" },
        { name: "Marge" },
      ],
    ),
    "Bart, Lisa, Maggie, Homer & Marge",
    "Must work with many names",
  );
  assertEquals(
    list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
    "Bart, Lisa & Maggie",
    "Must work with many names",
  );
  assertEquals(
    list([{ name: "Bart" }, { name: "Lisa" }]),
    "Bart & Lisa",
    "Must work with two names",
  );
  assertEquals(
    list([{ name: "Bart" }]),
    "Bart",
    "Wrong output for a single name",
  );
  assertEquals(list([]), "", "Must work with no names");
});
