//For dynamic programming, the core idea is to devide the problem into sub problems and resue the result of solved sub problems
/**
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  //the sum of nums from i to j
  let sumArray = nums
  for (let i = 1; i < nums.length; i++) {
    sumArray[i] += sumArray[i - 1]
  }
  this.sumArray = sumArray
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return i === 0 ? this.sumArray[j] : this.sumArray[j] - this.sumArray[i - 1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

/*
 * There is a row of coins from c1 to cn. Now I want to pick up coins to maximize the value of coins
 * The constraint is that no adjacent coins allowed	
 */
const coinRowProblem = (row) => {
  //devide the possible selections into two groups, the one that includes n plus the one that does not
  //the idea is f(n) = max {cn + f(n - 2), f(n - 1)}
  //the time complexity is O(n)
  //f(0) = 0, f(1) = c1
  //[4,2,1]
  let maxArray = []
  maxArray.push(0)
  maxArray.push(row[0])
  for (let i = 2; i <= row.length; i++) {
    maxArray[i] = Math.max(row[i - 1] + maxArray[i - 2], maxArray[i - 1])
  }
  return maxArray[row.length]
}

/*
 * Give change for amount n using the minumum numer of 
 */
const changeMakingProblem = (n, m) => {
  //f(n) = min {f(n - dj)} + 1
  //there are n sub-problems and for each problem, there are m posibilities
  //therefore, the time complexity is O(nm)
  //f(0) = 0
  let minArray = []
  minArray.push(0)
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < m.length; j++) {
      if (i >= m[j]) {
        min = Math.min(minArray[i - m[j]], min)
      }
    }
    minArray[i] = min + 1
  }
  return minArray[n]
}
