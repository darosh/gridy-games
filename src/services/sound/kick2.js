import {
  tickStop
} from './tick'

import {latency} from './latency'

let env

export function kick2Sound () {
  const {
    AmplitudeEnvelope,
    Oscillator,
    Panner,
    supported
  } = require('tone')

  if (!supported) {
    return
  }

  if (!env) {
    env = new Panner(1).connect(latency.master)

    env = new AmplitudeEnvelope({
      attack: 0.01,
      decay: 0.4,
      sustain: 0.1,
      release: 0.4
    }).connect(env)

    env.attackCurve = 'exponential'

    new Oscillator({
      type: 'sawtooth3',
      frequency: 'D4',
      volume: -12
    }).connect(env).start()
  }

  // latency.last = env
  tickStop(latency.stop)
  env.triggerAttackRelease(0.2, latency.start)
}
