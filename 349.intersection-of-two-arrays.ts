/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const result = new Set<number>();

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }

  return Array.from(result);
}
// @lc code=end
