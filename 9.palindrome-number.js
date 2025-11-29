/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 * https://leetcode.com/problems/palindrome-number/description/
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 負数と10の倍数(0以外)は回文にならない
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }
  const xStr = String(x);
  let reversedStr = "";

  for (let i = xStr.length - 1; i >= 0; i--) {
    reversedStr += xStr[i];
  }

  return xStr === reversedStr;
};
// @lc code=end
