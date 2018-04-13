export function log (msg, alert) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof msg === 'object') {
      console.dir(msg)
    } else {
      console.log(`%c${msg}`, `background-color: ${alert === 1 ? 'lightgoldenrodyellow' : alert ? 'lightsalmon' : 'lightgreen'}`)
    }
  }
}
