/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (47.54%)
 * Likes:    831
 * Dislikes: 0
 * Total Accepted:    217.2K
 * Total Submissions: 456.7K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 *
 * 示例 2：
 *
 *
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * 1
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 *
 *
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let i = j = 0 // 配置滑动窗口的左右边框
  let result = Infinity // 存储符合条件的数组长度
  let sum = 0 // 存储滑动窗口内的数值之和
  for (;j < nums.length; j++) {
    sum += nums[j] // 右边框右滑一格
    while (sum >= target) { // 如果满足条件,开始判断左边框能否右滑
      result = Math.min(result, (j - i + 1)) // 如果刷新最短长度,更新存储
      sum -= nums[i++] // 左边框右滑一次
    }
  }
  return result === Infinity ? 0 : result // 如果result没有被刷新 返回0
}
// @lc code=end
