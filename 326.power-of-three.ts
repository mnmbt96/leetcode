/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 * https://leetcode.com/problems/power-of-three/description/
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  let i = 0;
  while (3 ** i <= n) {
    if (3 ** i === n) {
      return true;
    }
    i++;
  }

  return false;
}
// @lc code=end
