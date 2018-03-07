import {
  tickStop
} from './tick'

import {
  latency
} from './latency'

let env

export function kick1Sound() {
  import ('tone').then(({
    default: {
      AmplitudeEnvelope,
      Oscillator,
      Panner,
      supported
    }
  }) => {

    if (!supported) {
      return
    }

    if (!env) {
      env = new Panner(-1).toMaster()

      env = new AmplitudeEnvelope({
        attack: 0.01,
        decay: 0.4,
        sustain: 0.1,
        release: 0.4
      }).connect(env)

      env.attackCurve = 'exponential'

      new Oscillator({
        type: 'sawtooth3',
        frequency: 'B3',
        volume: -12
      }).connect(env).start()
    }

    // latency.last = env
    tickStop(latency.stop)
    env.triggerAttackRelease(0.2, latency.start)
  })
}