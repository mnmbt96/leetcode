/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 * https://leetcode.com/problems/find-the-difference/description/
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  const convinedStr = s + t;

  let diff = 0;
  for (const str of convinedStr) {
    // 文字コードで同じ文字列を打ち消す
    diff ^= str.charCodeAt(0);
  }

  return String.fromCharCode(diff);
}
// @lc code=end
