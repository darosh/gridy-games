import {
  latency
} from './latency'

export let env

export function tickStop (value) {
  if (env) {
    env.cancel(value)
  }
}

export function tickSound () {
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
        attack: 0.025,
        decay: 0.6,
        sustain: 0,
        release: 1
      }).toMaster()

      new Oscillator({
        type: 'sawtooth',
        frequency: 'G3',
        volume: -12
      }).connect(env).start()
    }

    latency.last = env
    env.triggerAttack(latency.start)
  })
}
