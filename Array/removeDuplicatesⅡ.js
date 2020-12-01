var removeDuplicates = function(nums) {
  if (nums.length < 3) return nums.length;
  
  let i = 0, count = 1;
  
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      count++;
    } else {
      count = 1;
    }
    
    if (count > 2) {
      nums.splice(i--, 1);
      count--;
    }
    
    i++;
  }
  
  return nums.length;
};

// 根据 #26 第二个解决办法
var removeDuplicates = function(nums) {
  let length = 0;
  
  for (let num of nums) {
    if (length < 2 || num !== nums[length - 2]) {
      nums[length] = num;
      length++;
    }
  }
  
  return length;
};
