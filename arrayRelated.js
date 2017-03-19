/**
 * Search Insert Position
 * Given a sorted array and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums && nums.length !== 0) {
    const binarySearch = (low, high) => {
      if (low <= high) {
      	//better than Math.floor(x)
        const mid = (low + high) >> 1
        if (target === nums[mid]) {
          return mid
        } else if (target < nums[mid]) {
          return binarySearch(low, mid - 1)
        } else {
          return binarySearch(mid + 1, high)
        }
      } else {
      	//when it's not in array
        return target > nums[low] ? low + 1 : low
      }
    }
    return binarySearch(0, nums.length - 1)
  } else {
    return null
  }
};
