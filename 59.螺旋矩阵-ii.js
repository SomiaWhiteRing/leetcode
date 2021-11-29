/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (78.58%)
 * Likes:    535
 * Dislikes: 0
 * Total Accepted:    138.9K
 * Total Submissions: 176.8K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  let nowX = nowY = 0 // 建立绘制的初始坐标
  const result = new Array(n + 1)
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n).fill(0)
  } // 建立结果矩阵
  result[n] = new Array(n).fill(undefined) // 为了防止报错,加入一条undefiend数组
  let input = 1 // 将在下个空格输入的数
  const over = n * n // 到达终点应为的数
  let right = 1; let up = 0 // 建立前进方式的坐标系
  while (input <= over) {
    result[nowY][nowX] = input
    if (result[nowY + up][nowX + right] !== 0) {
      if (up === 0) {
        up = right
        right = 0
      } else {
        right = -up
        up = 0
      }
    } // 如果撞到了墙或者其他数字,顺时针旋转90度
    input++
    nowX += right
    nowY += up // 按照算定的坐标系移动一格
  }
  result.pop() // 抽出防止报错的undefined数组
  return result
}
// @lc code=end
