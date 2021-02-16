module.exports = function reverse (n) {
  let str = String(n)

  let arr = str.split('').reverse().join('')

  return parseInt(arr)
}
