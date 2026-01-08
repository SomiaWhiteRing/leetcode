/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (80.48%)
 * Likes:    3232
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */

import { get } from "http"

// @lc code=start
function permute(nums: number[]): number[][] {
  /**
   * 思考区：
   * 深度遍历构建递归……
   * 级别1尝试6种，剩下5种让下一级全试一遍
   * 级别2尝试5种，剩下4种让下一级全试一遍……
   */
  // 构建结果集
  const result: number[][] =  []
  // 构建结果快照
  const capture: number[] = []
  // 构建递归函数
  function getAll(workList: number[]) {
    // 如果当前循环到底，跳出
    if (workList.length === 0) {
      result.push([...capture])
    }
    // 当前递归指针
    let point: number = 0
    // 指针推进到头
    while (point < workList.length) {
      // 把指针对应的项目推入capture，并从工作列表中移除
      capture.push(workList[point])
      const childWorkList =
        workList.filter(val => val !== workList[point])
      // 进入下一层递归
      getAll(childWorkList)
      // 递归结束，当前层弹出，指针推进
      capture.pop()
      point ++
    }
  }
  getAll(nums)
  return result
};
// @lc code=end

