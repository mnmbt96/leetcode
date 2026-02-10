/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 * https://leetcode.com/problems/reverse-bits/description/
 */

// @lc code=start
function reverseBits(n: number): number {
  // 32桁の2進数文字列にする
  const binaryStr = n.toString(2).padStart(32, "0");
  // 文字列を反転させる
  const reversedStr = binaryStr.split("").reverse().join("");
  // 2進数の文字列を「数値」として解釈する
  return parseInt(reversedStr, 2) >>> 0;
}
// @lc code=end
