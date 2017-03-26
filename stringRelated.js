var isOneEditDistance = (s1, s2) => {
  if (s1 && s2) {
    //if they have the same length, check if there is only one char is different
    let length1 = s1.length,
      length2 = s2.length
    if (Math.abs(length1 - length2) > 1) return false
    for (let i = 0; i < Math.min(length1, length2); i++) {
      if (s1.charAt(i) !== s2.charAt(i)) {
        if (length1 === length2) {
          return s1.substring(i + 1) === s2.substring(i + 1)
        } else if (length1 < length2) {
          return s1.substring(i) === s2.substring(i + 1)
        } else {
          return s1.substring(i + 1) === s2.substring(i)
        }
      }
    }
    return Math.abs(length1 - length2) === 1
  }
  return false
}
