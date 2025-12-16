/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/description/
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // アルファベット以外の文字列を取り除く
  const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
}
// @lc code=end
