/*
var majorityElement = function (nums) {
  let map = new Map(),
    majority = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], 1);

    majority = map.get(nums[i]) > map.get(majority) ? nums[i] : majority;

    if (map.get(nums[i]) > nums.length / 2) return majority;
  }
};
*/

// 感觉用 map 好麻烦, 直接用 for...of 解决
var majorityElement = function (nums) {
  let majority = nums[0],
    restCount = 0;

  for (let num of nums) {
    if (majority === num) restCount++;
    else {
      restCount--;
      if (!restCount) {
        majority = num;
        restCount = 1;
      }
    }
  }

  return majority;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
