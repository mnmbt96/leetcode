/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  // key: 数字, value: 出現回数
  const numCountMap = new Map<number, number>();
  const result = [];

  for (const num of nums1) {
    // num1の全ての数字と出現回数をmapに入れる
    const count = numCountMap.get(num) ?? 0;
    numCountMap.set(num, count + 1);
  }

  for (const num of nums2) {
    const count = numCountMap.get(num) ?? 0;

    if (count > 0) {
      // 同じ数字が存在する場合
      result.push(num);
      numCountMap.set(num, count - 1);
    }
  }

  return result;
}
// @lc code=end
