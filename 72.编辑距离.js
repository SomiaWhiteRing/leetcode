/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (61.45%)
 * Likes:    1935
 * Dislikes: 0
 * Total Accepted:    189.6K
 * Total Submissions: 308.6K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * word1 和 word2 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // 划出矩阵长宽
  const length1 = word1.length
  const length2 = word2.length

  // 无法构成矩阵时,返回对应长度
  if(!length1){return length2}
  if(!length2){return length1}

  // 构建矩阵
  let mat = []
  for(let i = 0 ;i <= length1 ;i++){
    mat.push([])
    for(let j = 0 ;j <= length2 ;j++){
      if(i === 0){// 构建坐标系
        mat[i][j] = j
      }else if(j === 0){
        mat[i][j] = i
      }else if(word1[i-1] === word2[j-1]){
        mat[i][j] = mat[i-1][j-1]//如果两值相同,直接将未采用两个字符时的距离迁移过来
      }else{
        mat[i][j] = Math.min(mat[i][j-1],mat[i-1][j],mat[i-1][j-1]) + 1
      }
    }
  }

  return mat[length1][length2]
};
// @lc code=end

