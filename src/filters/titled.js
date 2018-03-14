export function titled (value) {
  return value ? value.replace(/([a-z])2/, '$1²').replace(/(\d)x(\d)/g, '$1\u202f×\u202f$2').replace(/-/g, '\u2011') : ''
}
