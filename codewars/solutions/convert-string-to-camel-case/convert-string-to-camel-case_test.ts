import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { toCamelCase } from "./convert-string-to-camel-case.ts";

Deno.test("Convert string to camel case", () => {
  assertEquals(
    toCamelCase(""),
    "",
    "An empty string was provided but not returned",
  );
  assertEquals(
    toCamelCase("the_stealth_warrior"),
    "theStealthWarrior",
    "toCamelCase('the_stealth_warrior') did not return correct value",
  );
  assertEquals(
    toCamelCase("The-Stealth-Warrior"),
    "TheStealthWarrior",
    "toCamelCase('The-Stealth-Warrior') did not return correct value",
  );
  assertEquals(
    toCamelCase("A-B-C"),
    "ABC",
    "toCamelCase('A-B-C') did not return correct value",
  );
});
