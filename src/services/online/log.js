export function log (msg, alert) {
  console.log(`%c${msg}`, `background-color: ${alert === 1 ? 'lightgoldenrodyellow' : alert ? 'lightsalmon' : 'lightgreen'}`)
}
