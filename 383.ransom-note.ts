/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 * https://leetcode.com/problems/ransom-note/description/
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const charCountMap = new Map<string, number>();

  // magazineの文字と出現回数をMapにまとめる
  for (const char of magazine) {
    const count = charCountMap.get(char) ?? 0;
    charCountMap.set(char, count + 1);
  }

  for (const char of ransomNote) {
    const count = charCountMap.get(char) ?? 0;

    if (count === 0) {
      // 一致する文字がない場合
      return false;
    }

    // カウントから引く
    charCountMap.set(char, count - 1);
  }

  return true;
}
// @lc code=end
