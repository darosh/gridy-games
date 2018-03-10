export function titled (value) {
  return value ? value.replace(/×/g, '\u202f×\u202f').replace(/-/g, '\u2011') : ''
}
