/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (39.52%)
 * Likes:    1024
 * Dislikes: 0
 * Total Accepted:    239.3K
 * Total Submissions: 605.8K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
function fourSum (nums: number[], target: number): number[][] {
  const ans : number[][] = [] // 定义要返回的结果
  nums.sort((a, b) => a - b) // 对数组进行一个排序
  const max: number = nums.length // 计算原数组长度
  for (let n : number = 0; n < max - 3; n++) { // 最左两位只需要不断右滑
    if (n > 0 && nums[n] === nums[n - 1]) { // 防止n位出现重复
      continue
    }
    for (let i : number = n + 1; i < max - 2; i++) { // 最左两位只需要不断右滑
      if (i > n + 1 && nums[i] === nums[i - 1]) { // 防止i位出现重复
        continue
      }
      let j : number = i + 1
      let k : number = max - 1
      while (j < k) { // 双指针互相逼近
        const result : number = nums[n] + nums[i] + nums[j] + nums[k]
        if (result === target) { // 等于target时填入数组
          ans.push([nums[n], nums[i], nums[j], nums[k]])
        }
        if (result <= target) { // 若小于等于target则将j向右滑
          j++
          while (nums[j] === nums[j - 1]) { // 防止target位出现重复
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
  }
  return ans
};
// @lc code=end
