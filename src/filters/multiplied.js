export function multiplied (value) {
  return value ? value.replace(/×/g, '\u202f×\u202f') : ''
}
