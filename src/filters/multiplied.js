export function multiplied (value) {
  return value ? value.replace(/(\d)x(\d)/g, '$1\u202f×\u202f$2') : ''
}
