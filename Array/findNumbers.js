var findNumbers = function(nums) {
  let result = 0
  
  nums.forEach(num => {
    if (num.toString().length % 2 === 0) result += 1
  })
  
  return result
};