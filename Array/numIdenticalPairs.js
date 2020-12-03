var numIdenticalPairs = function(nums) {
  const countPairs = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!countPairs.has(nums[i])) countPairs.set(nums[i], 1)
    else countPairs.set(nums[i], countPairs.get(nums[i]) + 1)
  }

  const goodPairs = [...countPairs.values()]

  const result = goodPairs.reduce((acc, cur) => {
    return acc += cur * (cur - 1) / 2
  }, 0)
  
  return result
};

// 上述方法前半部分与 #914 所用方法相同, 后半部分有点凑巧, 根据数字找规律(排列组合)得出的
// 竟然在评论区翻到有人和我一样用了这个数学算式 😂

// 查看评论区后, 发现问题其实是简单的
var numIdenticalPairs = function(nums) {
  let countPairs = {}
  let counter = 0
  
  for (num of nums) {
    if (countPairs[num]) {
      counter += countPairs[num]
      countPairs[num]++
    } else {
      countPairs[num] = 1
    }
  }
  
  return counter
};

// 更紧凑的写法
var numIdenticalPairs = function(nums) {
  let countPairs = {}
  let counter = 0

  for (num of nums) {
    !countPairs[num] ? countPairs[num] = 1 : counter += countPairs[num]++
  }
  
  return counter
};