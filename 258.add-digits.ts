/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 * https://leetcode.com/problems/add-digits/description/
 */

// @lc code=start
function addDigits(num: number): number {
  if (num < 10) {
    // 一桁の場合
    return num;
  }

  let numStr = String(num);
  while (numStr.length > 1) {
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
      // 各桁を足す
      sum += Number(numStr[i]);
    }

    numStr = String(sum);
  }

  return Number(numStr);
}
// @lc code=end
