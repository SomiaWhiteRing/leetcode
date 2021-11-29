/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 *
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (70.53%)
 * Likes:    358
 * Dislikes: 0
 * Total Accepted:    200.6K
 * Total Submissions: 284.5K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 10^4
 * -10^4
 * nums 已按 非递减顺序 排序
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 请你设计时间复杂度为 O(n) 的算法解决本问题
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const result = [] // 定义一个用来存储结果的数组
  let i = 0
  let j = nums.length - 1 // 在nums两侧布置双指针
  let left = nums[i] * nums[i]
  let right = nums[j] * nums[j] // 计算指针对应的平方值
  while (result.length < nums.length) { // 推入平方值直到推满整个数组
    if (left > right) { // 如果左平方值更大
      result.unshift(left) // 推入左平方值
      i++ // 左指针右移
      left = nums[i] * nums[i] // 计算新的左平方值
    } else { // 反之
      result.unshift(right) // 推入右平方值
      j-- // 右指针左移
      right = nums[j] * nums[j] // 计算新的右平方值
    }
  }
  return result
}
// @lc code=end
