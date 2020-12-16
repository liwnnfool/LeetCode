var subsets = function(nums) {
  const result = [[]]
  
for (const num of nums) {
  result.push(...result.map(x => [...x, num]))
}
  
  return result
};