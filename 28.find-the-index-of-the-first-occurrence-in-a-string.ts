/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  let index = -1;
  // 一致する文字列のインデックスを取得する
  index = haystack.indexOf(needle);
  return index;
}
// @lc code=end
