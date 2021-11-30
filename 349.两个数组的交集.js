/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (73.83%)
 * Likes:    446
 * Dislikes: 0
 * Total Accepted:    229.8K
 * Total Submissions: 311.3K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 *
 *
 *
 * 说明：
 *
 *
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const check = {} // 定义检查对象
  const ans = []
  for (i in nums1) {
    if (check[nums1[i]] === undefined) { check[nums1[i]] = true } // 如果检查对象上没有映射记录,则配置映射
  }
  for (i in nums2) {
    if (check[nums2[i]] === true) { // 如果检查对象上有映射记录
      ans.push(nums2[i]) // 则将数值推入结果组
      check[nums2[i]] = false // 并清除映射记录
    }
  }

  return ans // 返回结果组
}
// @lc code=end
