export function era (value) {
  return value ? Math.abs(value) + (value < 0 ? ' BCE' : '') : ''
}
