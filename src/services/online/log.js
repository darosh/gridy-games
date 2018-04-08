export function log (msg, alert) {
  console.log(`%c${msg}`, `background-color: ${alert ? 'lightsalmon' : 'lightgreen'}`)
}
