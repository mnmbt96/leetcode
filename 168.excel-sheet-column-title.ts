/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let columnTitle = "";

  while (columnNumber > 0) {
    // 0が存在しない26進数
    columnNumber--;
    // 余りを出す
    const remainder = columnNumber % 26;
    // 26で割って下の位の整数を取得する
    columnNumber = Math.floor(columnNumber / 26);
    // 文字に変換（65は"A"のコード）
    const str = String.fromCharCode(65 + remainder);
    columnTitle = str + columnTitle;
  }

  return columnTitle;
}
// @lc code=end
