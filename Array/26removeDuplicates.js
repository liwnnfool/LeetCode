/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  let cur;
  
  for (let i = 0; i < nums.length; i++) {
    cur = nums[i];
    
    for(let j = i + 1; j < nums.length; j++) {
      if (cur === nums[j]) {
        nums.splice(j--, 1)
      }
    }
  }
  
  return nums.length;
};

// 查看评论区, 发现了更好的解决办法
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  
  let i = 0;
  
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

// 更为优雅的解决办法
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  
  nums.splice(0, nums.length, ...(new Set(nums)))

  return nums.length;
};