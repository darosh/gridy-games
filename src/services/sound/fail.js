import { latency } from './latency'
import { Constants } from './constants'

const {
  SOUND_FAIL_ENV,
  SOUND_FAIL_OSC
} = Constants

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
      env = new AmplitudeEnvelope(SOUND_FAIL_ENV).toMaster()
      new Oscillator(SOUND_FAIL_OSC).connect(env).start()
    }

    latency.last = env
    env.triggerAttack(latency.start)
  })
}
