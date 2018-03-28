import {latency} from './latency'
import { Constants } from './constants'

const {
  SOUND_TICK_ENV,
  SOUND_TICK_OSC
} = Constants

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
      env = new AmplitudeEnvelope(SOUND_TICK_ENV).toMaster()
      new Oscillator(SOUND_TICK_OSC).connect(env).start()
    }

    latency.last = env
    env.triggerAttack(latency.start)
  })
}
