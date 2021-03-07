import { assertEquals } from 'https://deno.land/std@0.60.0/testing/asserts.ts';
import { maxProfit } from './best-time-to-buy-and-sell-stock.ts';

Deno.test('121. Best Time to Buy and Sell Stock', () => {
  assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});
