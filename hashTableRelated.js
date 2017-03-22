/**
 * [1, 3, 4, 4, 3]
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums && nums.length) {
    return nums.reduce((acc, curr) => acc ^ curr)
  }
  return null
};

/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (nums && nums.length) {
    //x -> index
    let map = {},
      result = []
    for (let i = 0; i < nums.length; i++) {
      if (map[target - nums[i]] !== undefined) {
        result[0] = map[target - nums[i]]
        result[1] = i
      }
      map[nums[i]] = i
    }
    return result
  }
  return null
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  if (grid && grid.length && grid[0].length) {
    let island = 0,
      neighbours = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          island++
          if (grid[i + 1] !== undefined && grid[i + 1][j] === 1) {
            neighbours++
          }
          if (grid[i][j + 1] === 1) {
            neighbours++
          }
        }
      }
    }
    return island * 4 - neighbours * 2
  }
  return null
};
/**
 * Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i
 * and j equals the distance between i and k (the order of the tuple matters).
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  if (points && points.length) {
    let map = {},
      result = 0
    for (let i = 0; i < points.length; i++) {
      map = {}
      for (let j = 0; j < points.length; j++) {
        if (i != j) {
          let d = Math.pow(points[j][0] - points[i][0], 2) + Math.pow(points[j][1] - points[i][1], 2)
          map[d] = map[d] === undefined ? 1 : map[d] + 1
        }
      }
      result = Object.keys(map).reduce((acc, curr) => acc + map[curr] * (map[curr] - 1), result)
    }
    return result
  }
  return null
};
/**
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (typeof s === 'string' && typeof p === 'string') {
    const chars = p.split('')
    let map = {}
    result = []
    for (let i = 0; i < chars.length; i++) {
      // let tmp = chars.slice(i, i + p.length)
      map[chars[i]] = map[chars[i]] === undefined ? 1 : map[chars[i]] + 1
    }

    //start from 0
    let left = 0,
      right = 0,
      count = p.length
    while (right < s.length) {
      if (map[s.charAt(right)] > 0) {
        //find a match
        count--
      }
      map[s.charAt(right)]--;
      right++
      if (count === 0) {
        result.push(left)
      }
      if (right - left === p.length) {
        if (map[s.charAt(left)] >= 0) {
          count++
        }
        //if left was in p, then add it back
        map[s.charAt(left)]++;
        left++
      }
    }
    return result
  }
  return null
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let buildMap = (array) => {
    return array.reduce((acc, x) => acc.set(x, acc.get(x) ? acc.get(x) + 1 : 1), new Map())
  }
  let map1 = buildMap(nums1)
  let map2 = buildMap(nums2)
  let small = nums1.length < nums2.length ? map1 : map2
  let large = nums1.length < nums2.length ? map2 : map1
  let result = []
  small.forEach((v, k) => {
    if (large.get(k)) {
      let times = v < large.get(k) ? v : large.get(k)
      for (var i = 0; i < times; i++) {
        result.push(k)
      }
    }
  })
  return result
};
