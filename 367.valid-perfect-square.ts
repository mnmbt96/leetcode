/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/description/
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  let i = 1;

  while (i * i <= num) {
    if (i * i === num) {
      return true;
    }
    i++;
  }

  return false;
}
// @lc code=end
