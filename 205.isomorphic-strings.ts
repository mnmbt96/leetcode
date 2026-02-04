/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/description/
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const mapToT = new Map<string, string>(); // key: s, value: t
  const mapToS = new Map<string, string>(); // key: t, value: s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapToT.has(charS)) {
      // すでにsの文字が登録されている場合
      if (mapToT.get(charS) !== charT) {
        // 登録されているペアが、今のtの文字と違う
        return false;
      }
    } else if (mapToS.has(charT)) {
      // sの文字は未登録だが、tの文字がすでに別のsとペアになっている
      return false;
    } else {
      // どちらも新しい文字の場合、ペアを登録
      mapToT.set(charS, charT);
      mapToS.set(charT, charS);
    }
  }

  return true;
}
// @lc code=end
