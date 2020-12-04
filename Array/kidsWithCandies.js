var kidsWithCandies = function(candies, extraCandies) {
  const result = []
  
  for (const kidCandies of candies) {
    if ((kidCandies + extraCandies) >= Math.max(...candies)) result.push(true)
    else result.push(false)
  }
  
  return result
}

// 略微复杂, 评论区看到可以使用 map, 简略很多
var kidsWithCandies = function(candies, extraCandies) {
  candies.map(val => {
    (val + extraCandies) >= Math.max(...candies)
  })

  return candies
}