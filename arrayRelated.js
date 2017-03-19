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

/**
 * Given numRows, generate the first numRows of Pascal's triangle.
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [],
    mem = {};
  //cell(row, column) = cell(row - 1, column - 1) + cell(row - 1, column)
  const cell = (row, column) => {
    if (column === 0 || column === row) {
      return 1
    } else {
      if (mem[[row, column]]) {
        return mem[[row, column]]
      } else {
        mem[[row, column]] = cell(row - 1, column - 1) + cell(row - 1, column)
        return mem[[row, column]]
      }
    }
  }
  for (let i = 0; i < numRows; i++) {
    let row = [],
      size = i + 1;
    for (let j = 0; j < size; j++) {
      row.push(cell(i, j))
    }
    result.push(row)
  }
  return result
};
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex < 0) {
    return []
  }
  let row = []
  row[0] = 1
  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = i - 1; j >= 1; j--) {
      row[j] = row[j] + row[j - 1]
    }
    row.push(1)
  }
  return row
};

/**
 * time complexity must be O(n)
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let [first, second, third] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
  nums.forEach((x) => {
    if (x !== first && x !== second && x !== third) {
      if (x > first) {
        third = second
        second = first
        first = x
      } else if (x > second) {
        third = second
        second = x
      } else if (x > third) {
        third = x
      }
    }
  })
  return third === Number.MIN_SAFE_INTEGER ? first : third
};
/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits && digits.length) {
    let result = []
    let carry = 1
    for (let i = digits.length - 1; i >= 0; i--) {
      let tmp = digits[i] + carry
      carry = tmp > 9 ? 1 : 0
      result.unshift(tmp > 9 ? tmp - 10 : tmp)
    }
    if (carry === 1) {
      result.unshift(1)
    }
    return result
  }
  return null
};
