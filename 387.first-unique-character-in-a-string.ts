/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 */

// @lc code=start
function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      // 最初と最後に一致するインデックスが同じ = 重複なし
      return i;
    }
  }

  return -1;
}
// @lc code=end
