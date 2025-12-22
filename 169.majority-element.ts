/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 * https://leetcode.com/problems/majority-element/description/
 */

// @lc code=start
// function majorityElement(nums: number[]): number {
//   let resultNum = 0;
//   let maxCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     // 現在の数字がresultNumと違う場合
//     if (nums[i] !== resultNum) {
//       // 現在の数字が配列に何個あるか
//       const count = nums.filter((num) => num === nums[i]).length;
//       // 現在の数字の個数がmaxCountより多い場合
//       if (count > maxCount) {
//         // 結果の数字と最大の個数を変更する
//         resultNum = nums[i];
//         maxCount = count;
//       }
//     }
//   }
//   return resultNum;
// }

function majorityElement(nums: number[]): number {
  let candidate = 0; //　候補の数字
  let count = 0;

  for (const num of nums) {
    // countが0の場合、新候補を代入
    if (count === 0) {
      candidate = num;
    }

    // 現在の数字と候補の数字が同じならcount+1
    // 違う場合count-1
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}
// @lc code=end
