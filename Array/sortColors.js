var sortColors = function(nums) {
  let left = 0,
        right = nums.length - 1,
        cur = 0
  
  while (cur <= right) {
    if (nums[cur] === 0) {
      [nums[cur++], nums[left++]] = [nums[left], nums[cur]]
    } else if (nums[cur] === 2) {
      [nums[cur], nums[right--]] = [nums[right], nums[cur]]
    } else cur++
  }
};