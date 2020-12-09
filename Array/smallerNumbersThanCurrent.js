var smallerNumbersThanCurrent = function(nums) {
  const sorted = Array.from(nums).sort((a, b) => a - b)

  const result = nums.map(num => sorted.indexOf(num))

  return result
};
