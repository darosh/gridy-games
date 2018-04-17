export function getPathSetter (obj, path) {
  const parts = path.split('.')
  const last = parts.pop()
  let o = obj

  while (parts.length) {
    o = o[parts.shift()]
  }

  return function (value) {
    o[last] = value
  }
}
