/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (37.58%)
 * Likes:    790
 * Dislikes: 0
 * Total Accepted:    231.2K
 * Total Submissions: 615.2K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x^n）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 *
 *
 * 示例 3：
 *
 *
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2^-2 = 1/2^2 = 1/4 = 0.25
 *
 *
 *
 *
 * 提示：
 *
 *
 * -100.0
 * -2^31
 * -10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  return Math.pow(x, n)
}
// @lc code=end
