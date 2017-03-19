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
