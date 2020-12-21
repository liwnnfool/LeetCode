// only condition 1 is met
var findDuplicate = function(nums) {
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1])
      return nums[i]
  }
};

/**
 * Used in the Discuss is Tortoise and Hare Algorithm, then I learned, and this is my understanding
 * 
 * 1 -> 3 -> 5 -> 9 -> 8
 *      ↑ <-   <-   <- ↓     
 * 
 * How to detect if exist cycle?
 * Set slow and fast pointer, they are moving at different speeds and will eventually meet somewhere
 * like this:
 * 
 * They meet at beginning:
 * slow = slow -> next
 * fast = fast -> next -> next
 * 
 * They meet at inside the cycle:
 * slow = slow -> next -> next
 * fast = fast -> next -> next -> next
 * 
 * They meet, I don't know why. Depending on the location of the encounter, the starting point of the cycle can be determined
 * 
 * Simulate the algorithm according to the problem conditions
 * 
 * Index 0 1 2 3 4 5 6 7
 * Value 3 5 7 6 5 2 4 1
 * 
 * the duplicate numbers are 3. Treat each pair of value and index as a node
 * 
 * The first node's value is 3, and treat the value as a pointer to the next node:
 * 3(nums[0]) -> 6(nums[3]) -> 4(nums[6]) -> 5(nums[4]) -> 2(nums[5]) -> 7(nums[2]) -> 1(nums[7])
 *                                           ↑(nums[1]) <-            <-            <- ↓
 * They meet!
 * 
 * First we can find where slow and fast meet;
 * Because it's a cycle, so I can find the beginning, and beginning means duplicate number
 */
var findDuplicate = function(nums) {
  let slow = nums[0],
      fast = nums[slow]
  
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }
  
  slow = 0
  
  while (slow != fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  
  return slow
};
