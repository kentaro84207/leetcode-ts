// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

export const maxProfit = (prices: number[]): number => {
  let max = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > max) {
      max = prices[i] - minPrice;
    }
  }
  return max;
};
