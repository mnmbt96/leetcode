/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 * https://leetcode.com/problems/power-of-four/description/
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  let i = 0;

  while (4 ** i <= n) {
    if (4 ** i === n) {
      return true;
    } else {
      i++;
    }
  }

  return false;
}
// @lc code=end
