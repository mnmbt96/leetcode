/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}
// @lc code=end
