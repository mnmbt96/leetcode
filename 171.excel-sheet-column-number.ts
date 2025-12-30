/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    // インデックスを取得する
    const index = alphabet.indexOf(columnTitle[i]) + 1;
    // 桁をひとつ繰り上げて現在の要素を足す
    result = result * 26 + index;
  }

  return result;
}
// @lc code=end
