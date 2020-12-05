var runningSum = function(nums) {
  let count = 0;
  
  return nums.map(num => count += num)
};