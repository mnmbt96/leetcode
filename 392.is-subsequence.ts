/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 * https://leetcode.com/problems/is-subsequence/description/
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  while (j < t.length) {
    if (s[i] === t[j]) {
      // 文字が一致する場合
      i++;
    }

    j++;
  }

  return i === s.length;
}
// @lc code=end
