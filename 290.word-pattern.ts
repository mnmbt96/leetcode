/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 * https://leetcode.com/problems/word-pattern/description/
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const strArr = s.split(" ");

  if (pattern.length !== strArr.length) {
    return false;
  }

  // 文字から単語へのマップ
  const charToWord = new Map<string, string>();
  // 単語から文字へのマップ
  const wordToChar = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = strArr[i];

    if (charToWord.has(char)) {
      // charがすでに登録されている
      if (charToWord.get(char) !== word) {
        // 登録された単語と違う
        return false;
      }
    } else {
      // charが登録されてない
      if (wordToChar.has(word)) {
        // 単語が別の文字とペアになっている
        return false;
      }
      // ペアを登録する
      charToWord.set(char, word);
      wordToChar.set(word, char);
    }
  }

  return true;
}

// @lc code=end
