/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      // 現在の数字がminPriceより小さい場合、minPriceを更新
      minPrice = prices[i];
    } else {
      // 現在の数字とminPriceの差額とprofitを比較する
      profit = Math.max(profit, prices[i] - minPrice);
    }
  }

  return profit;
}
// @lc code=end
