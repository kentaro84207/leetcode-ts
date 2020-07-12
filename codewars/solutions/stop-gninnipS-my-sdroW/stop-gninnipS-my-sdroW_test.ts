import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { spinWords } from "./stop-gninnipS-my-sdroW.ts";

Deno.test("Calculating with Functions", () => {
  assertEquals(spinWords("Welcome"), "emocleW");
  assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
  assertEquals(spinWords("This is a test"), "This is a test");
  assertEquals(spinWords("This is another test"), "This is rehtona test");
  assertEquals(
    spinWords("You are almost to the last test"),
    "You are tsomla to the last test",
  );
  assertEquals(
    spinWords("Just kidding there is still one more"),
    "Just gniddik ereht is llits one more",
  );
  assertEquals(
    spinWords("Seriously this is the last one"),
    "ylsuoireS this is the last one",
  );
});
