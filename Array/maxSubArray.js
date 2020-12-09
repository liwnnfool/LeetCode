var maxSubArray = function(nums) {
  let curSum = 0;
  let maxSub = nums[0];

  for (let num of nums) {
    if (curSum < 0)
      curSum = 0;

    curSum += num;
    maxSub = Math.max(curSum, maxSub);
  }
  
  return maxSub;
};