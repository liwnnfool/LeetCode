var twoSum = function(nums, target) {
  const store = {};
  for(let i = 0; i < nums.length; i++){
      store[target - nums[i]] = i;
      if(nums[i+1] in store) return [store[nums[i+1]], i+1]
  };
};