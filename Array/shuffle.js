var shuffle = function(nums, n) {
  let shuffleArr = []
  
  for (let i = 0; i < n; i++)
    shuffleArr = shuffleArr.concat([nums[i], nums[n + i]])
  
  return shuffleArr
};