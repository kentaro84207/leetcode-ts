import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { countSmileys } from "./count-the-smiley-faces.ts";

Deno.test("Count the smiley faces", () => {
  assertEquals(countSmileys([]), 0);
  assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
  assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
  assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
});
