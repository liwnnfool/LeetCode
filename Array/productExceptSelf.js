// 7676 ms, so slow
var productExceptSelf = function(nums) {
  const result = []
  let num = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) num *= nums[j]
    }
    result.push(num)
    num = 1
  }
  return result
};

// Discuss
var productExceptSelf = function(nums) {
  const product = [],
        len = nums.length
  let after = 0,
      before = 0
  
  product[0] = nums[0]
  
  for (let i = 1; i < nums.length; i++) {
    product[i] = product[i - 1] * nums[i]
  }
  
  const lastEl = product[len - 2]
  
  after = nums[len - 1]
    
  for (let i = len - 2; i > 0; i--) {
    before = product[i - 1]
    product[i] = after * before
    after = after * nums[i]
  }
  
  product[0] = after
  product[len - 1] = lastEl
  
  return product
};