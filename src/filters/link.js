export function link (value) {
  if (!value) {
    return ''
  }

  return decodeURIComponent(/[^/]+$/.exec(value)[0]).replace(/_/g, ' ').replace(/\(.*\)/, '')
}
