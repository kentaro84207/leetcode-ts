import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { encrypt, decrypt } from "./alternating-split.ts";

Deno.test("EncryptExampleTests", () => {
  assertEquals(encrypt("This is a test!", 0), "This is a test!");
  assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
  assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
  assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
  assertEquals(encrypt("This is a test!", 4), "This is a test!");
  assertEquals(encrypt("This is a test!", -1), "This is a test!");
  assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
});

Deno.test("DecryptExampleTests", () => {
  assertEquals(decrypt("This is a test!", 0), "This is a test!");
  assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
  assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
  assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
  assertEquals(decrypt("This is a test!", 4), "This is a test!");
  assertEquals(decrypt("This is a test!", -1), "This is a test!");
  assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
});

Deno.test("Null or Empty", () => {
  assertEquals(encrypt("", 0), "");
  assertEquals(decrypt("", 0), "");
  assertEquals(encrypt(null, 0), null);
  assertEquals(decrypt(null, 0), null);
});
