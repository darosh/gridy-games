import { latency } from './latency'

let env

export function failSound () {
  import('../../../plugins/tone').then(({
    AmplitudeEnvelope,
    Oscillator,
    Tone
  }) => {
    if (!Tone.supported) {
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
  })
}
