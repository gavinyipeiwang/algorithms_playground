/**
 * Count the number of prime numbers less than a non-negative number, n.
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n) {
    if (n < 2)
      return 0;
    //assume all numbers are prime
    let array = new Array(n).fill(true);
    //0 and 1 are not prime
    array[0] = false
    array[1] = false
    let count = 0
    for (let i = 2; i < n; i++) {
      if (array[i]) {
        count++
        for (let j = 2; j * i < n; j++) {
          array[j * i] = 0
        }
      }
    }
    return count
  }
  return 0
};
