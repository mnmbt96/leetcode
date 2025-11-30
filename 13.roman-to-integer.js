/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/description/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanDict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanDict[s[i]] < romanDict[s[i + 1]]) {
      // 4と9になる条件:現在の要素が次の要素より小さい場合
      // 現在の要素を全体から引く
      result = result - romanDict[s[i]];
    } else {
      result = result + romanDict[s[i]];
    }
  }
  return result;
};
// @lc code=end
