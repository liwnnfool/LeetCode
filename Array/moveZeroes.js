// 从数组最后一个位置开始遍历, 省去变换当前索引位置
var moveZeroes = function(nums) {
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
};

// 从数组第一个位置开始遍历, 需要变换当前索引位置与数组长度. 因为若当前索引元素为 0, 该元素需要被移除
var moveZeroes = function(nums) {
  let length = nums.length
  
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      length--
      i--
    }
  }
};