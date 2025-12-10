/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 * https://leetcode.com/problems/add-binary/description/
 *
 */
// @lc code=start
function addBinary(a: string, b: string): string {
  let carry = 0; // 繰り上げ
  let result = [];

  let i = a.length - 1;
  let y = b.length - 1;
  while (i >= 0 || y >= 0 || carry === 1) {
    const bitA = i >= 0 ? Number(a[i]) : 0;
    const bitB = y >= 0 ? Number(b[y]) : 0;

    // 同じ桁の数同士と繰り上げを足す
    const sum = bitA + bitB + carry;

    // sumを2で割った余り(0または1)を結果に入れる
    result.push(sum % 2);
    // sumを2で割った整数部が繰り上がり
    carry = Math.floor(sum / 2);

    i--;
    y--;
  }

  return result.reverse().join("");
}
// @lc code=end
