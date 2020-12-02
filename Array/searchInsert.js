var searchInsert = function(nums, target) {
  let curIndex = 0;
  
  for (let num of nums) {
    if (target > num) {
      curIndex++;
    } else if (target <= num) {
      return curIndex;
    }
  }
  
  return curIndex;
};

// better from discuss --- Binary Search
var searchInsert = (nums, target) => {
  let start = 0, end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  
  return end + 1;
}