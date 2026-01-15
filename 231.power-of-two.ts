/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 * https://leetcode.com/problems/power-of-two/description/
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  let i = 0;

  while (2 ** i <= n) {
    if (2 ** i === n) {
      return true;
    }
    i++;
  }

  return false;
}
// @lc code=end
