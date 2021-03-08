import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { maxProfit } from './best-time-to-buy-and-sell-stock-ii.ts';

Deno.test('122. Best Time to Buy and Sell Stock II', () => {
  assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 7);
  assertEquals(maxProfit([1,2,3,4,5]), 4);
  assertEquals(maxProfit([7,6,4,3,1]), 0);
  assertEquals(maxProfit([1,7,2,3,6,7,6,7]), 12);
});
