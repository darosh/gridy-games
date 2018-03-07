import {latency} from './latency'

let env

export function failSound () {
  const {
    AmplitudeEnvelope,
    Oscillator,
    supported
  } = require('tone')

  if (!supported) {
    return
  }

  if (!env) {
    env = new AmplitudeEnvelope({
      'attack': 0.025,
      'decay': 1.2,
      'sustain': 0,
      'release': 1
    }).toMaster()

    new Oscillator({
      'type': 'sawtooth',
      'frequency': 'C3',
      'volume': -12
    }).connect(env).start()
  }

  latency.last = env
  env.triggerAttack(latency.start)
}
