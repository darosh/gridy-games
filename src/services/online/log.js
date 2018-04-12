export function log (msg, alert) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`%c${msg}`, `background-color: ${alert === 1 ? 'lightgoldenrodyellow' : alert ? 'lightsalmon' : 'lightgreen'}`)
  }
}
