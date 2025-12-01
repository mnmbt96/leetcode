/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/description/
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const firstStr = strs[0];
  let pref = "";

  for (let i = 0; i < firstStr.length; i++) {
    if (strs.every((s) => s.startsWith(pref + firstStr[i]))) {
      //　配列の全ての要素がprefに1文字ずつ足した文字列で始まる場合
      pref += firstStr[i];
    } else {
      break;
    }
  }

  return pref;
};
// @lc code=end
