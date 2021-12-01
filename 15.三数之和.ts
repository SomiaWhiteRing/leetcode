/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (33.92%)
 * Likes:    4038
 * Dislikes: 0
 * Total Accepted:    718.1K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^5
 *
 *
 */

// @lc code=start
function threeSum (nums: number[]): number[][] {
  const ans : number[][] = [] // 定义要返回的结果
  nums.sort((a, b) => a - b) // 对数组进行一个排序
  const max: number = nums.length // 计算原数组长度
  for (let i : number = 0; i < max - 2; i++) { // 最左位只需要不断右滑
    if (i > 0 && nums[i] === nums[i - 1]) { // 防止i位出现重复
      continue
    }
    if (nums[i] > 0) { // 摸到正数就可以跑了
      break
    }
    let j : number = i + 1
    let k : number = max - 1
    while (j < k) { // 双指针互相逼近
      const result : number = nums[i] + nums[j] + nums[k]
      if (result === 0) { // 等于0时填入数组
        ans.push([nums[i], nums[j], nums[k]])
      }
      if (result <= 0) { // 若小于等于0则将j向右滑
        j++
        while (nums[j] === nums[j - 1]) { // 防止j位出现重复
          j++
        }
      } else { // 若大于0则将k向左滑
        k--
        while (nums[k] === nums[k + 1]) { // 防止k位出现重复
          k--
        }
      }
    }
  }
  return ans
}
// @lc code=end
