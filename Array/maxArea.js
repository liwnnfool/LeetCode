// 1000 ms
var maxArea = function (height) {
  let container = -1;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const red = height[i] > height[j] ? height[j] : height[i];
      const curWater = (j - i) * red;

      if (curWater > container) container = curWater;
    }
  }
  return container;
};

// 80 ms
var maxArea = function(height) {
  let start = 0, 
      end = height.length - 1,
      maxArea = -1,
      area = 0
  
  while (start < end) {
    area = (end - start) * Math.min(height[start], height[end])
    maxArea = Math.max(area, maxArea)
    height[start] < height[end] ? start++ : end--
  }
  
  return maxArea
};