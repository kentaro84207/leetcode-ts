// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

export const maxProfit = (prices: number[]): number => {
  let max = 0;
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
};
