/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 * https://leetcode.com/problems/sqrtx/description/
 */

// @lc code=start
function mySqrt(x: number): number {
  let sqrt = 1;

  // 二乗してx以下の時はループ
  while (sqrt * sqrt <= x) {
    sqrt++;
  }

  return sqrt - 1;
}
// @lc code=end
