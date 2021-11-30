// 作者：杰出D
// 链接：https://juejin.cn/post/6983904373508145189
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 输入
const arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 }
]

// 输出
const release = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门2',
        pid: 1,
        children: []
      },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        children: [
          // ......
        ]
      }
    ]
  }
]

const changeToTree = function (arr) {
  const release = [] // 存放答案
  const set = {} // 存放转成对象形式的数组
  for (const item of arr) {
    set[item.id] = {
      id: item.id,
      name: item.name,
      pid: item.pid,
      children: []
    }
  } // 把对象按ID转换成数组形式
  for (const item of arr) {
    const id = item.id
    const pid = item.pid
    const treeItem = set[id]
    if (pid === 0) {
      release.push(treeItem)
    } else {
      if (!set[pid]) {
        set[pid] = {
          children: []
        }
      }
      set[pid].children.push(treeItem)
    }
  }

  return release
}

const answer = changeToTree(arr)
console.log(answer)
