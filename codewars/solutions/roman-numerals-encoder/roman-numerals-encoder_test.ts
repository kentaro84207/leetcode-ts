import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { solution } from "./roman-numerals-encoder.ts";

Deno.test("it should handle small numbers", () => {
  assertEquals(solution(1), 'I', '1 should, "I"')
  assertEquals(solution(2), 'II', '2 should, "II"')
  assertEquals(solution(3), 'III', '3 should, "III"')
  assertEquals(solution(4), 'IV', '4 should, "IV"')
  assertEquals(solution(5), 'V', '5 should, "V"')
  assertEquals(solution(9), 'IX', '9 should, "IX"')
  assertEquals(solution(10), 'X', '10 should, "X"')
  assertEquals(solution(11), 'XI')
  assertEquals(solution(19), 'XIX')
  assertEquals(solution(22), 'XXII')
  assertEquals(solution(15), 'XV')
});

Deno.test("it should handle small numbers", () => {
  assertEquals(solution(1000), 'M', '1000 should, "M"')
  assertEquals(solution(1001), 'MI', '1001 should, "MI"')
  assertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
  assertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"')
  assertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
});
