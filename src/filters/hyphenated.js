export function hyphenated (value) {
  return value ? value.replace(/-/g, '\u2011') : ''
}
