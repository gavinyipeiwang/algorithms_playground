const fib = (n) => (n === 0 || n === 1) ? n : fib(n - 1) + fib(n - 2)

const fibMem = (n) => {
  let cache = {}

  const mem = (x, fn) => {
    if (x in cache) return cache[x]
    else {
      cache[x] = fn(x)
      return cache[x]
    }
  }
  const helper = (x) => {
    if (x === 0 || x === 1) return x
    else return mem(x - 1, helper) + mem(x - 2, helper)
  }

  return helper(n)
}

const mem = (fn) => {
  let cache = {}
  return function() {
    const args = Array.prototype.slice.call(arguments)
    return args in cache ? cache[args] : (cache[args] = fn.apply(this, args))
  }
}
