var merge = function(nums1, m, nums2, n) {
  let index1 = m - 1, index2 = n - 1, index = m + n - 1
  
  while (index1 >= 0 && index2 >= 0) {
    nums1[index1] > nums2[index2] ? nums1[index--] = nums1[index1--] : nums1[index--] = nums2[index2--]
  }
  
  while (index1 >= 0) {
    nums1[index--] = nums1[index1--]
  }
  
  while (index2 >= 0) {
    nums1[index--] = nums2[index2--]
  }
};