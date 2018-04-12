const { format } = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 })

export function number (n) {
  if (!n) {
    return n
  }

  return format(n)
}
