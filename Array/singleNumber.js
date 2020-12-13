var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0]
  
  let foo = {};
  
  for (let i = 0; i < nums.length; i++) {
    // foo.hasOwnProperty(nums[i]) ? ++foo[nums[i]] : foo[nums[i]] = 1
    foo[nums[i]] = ++foo[nums[i]] || 1
  }
  
  for (let num in foo) {
    if (foo[num] === 1) return num
  }
};

// from discuss, a magic method
// const arr = [1,1,2,2,3,3,45,6,6,7,7]
// 
// arr.reduce((arr, cur) => {
//   console.log(arr, cur)
//   console.log(arr ^ cur)
//   return arr ^ cur
// })
var singleNumber = function(nums) {
  return nums.reduce((acc, cur) => acc ^ cur)
};