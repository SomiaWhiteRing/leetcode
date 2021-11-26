/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let n = 0; n < nums.length; n++) {
      if ((nums[i] + nums[n]) === target && i !== n) {
        return ([i, n])
      }
    }
  }
}
// @lc code=end
