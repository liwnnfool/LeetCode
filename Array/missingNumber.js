var missingNumber = function(nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i)
      return i
  }
  
  return nums.length
};

// very solwly, 132 ms, faster than 13% JS submissions
// discuss

var missingNumber = function(nums) {
  let expectedSum = 0,
      sum = 0
  
  for (let i = 0; i <= nums.length; i++) {
    expectedSum += i
  }
  
  for (let i =0; i < nums.length; i++) {
    sum += nums[i]
  }
  
  return expectedSum - sum
};