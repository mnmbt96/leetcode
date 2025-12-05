/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/description/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 空白を除いた文字列の配列を作る
  const wordArray = s.split(" ").filter((str) => str !== "");
  // 最後の単語のlength
  return wordArray[wordArray.length - 1].length;
};
// @lc code=end
