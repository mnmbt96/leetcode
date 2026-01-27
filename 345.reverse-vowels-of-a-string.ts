/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 */

// @lc code=start
function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const strArr = s.split("");
  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    const isLeftVowel = vowels.includes(strArr[left]);
    const isRightVowel = vowels.includes(strArr[right]);
    if (isLeftVowel && isRightVowel) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      left++;
      right--;
    } else {
      if (!isLeftVowel) {
        left++;
      }
      if (!isRightVowel) {
        right--;
      }
    }
  }

  return strArr.join("");
}
// @lc code=end
