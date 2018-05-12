export const getType = (fn) => {
  const match = fn && fn.toString().match(/^\s*function (\w+)/)
  return match ? match[1] : ''
}

export const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj || {}).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k]
        return acc
      }, {}),
    {}
  )

export const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])
