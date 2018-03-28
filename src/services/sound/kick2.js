import { tickStop } from './tick'
import { latency } from './latency'
import { Constants } from './constants'

const {
  PAN_RIGHT,
  SOUND_KICK_ENV,
  SOUND_KICK_2,
  SOUND_KICK_TIME
} = Constants

let env

export function kick2Sound () {
  import('../../../plugins/tone').then(({
    AmplitudeEnvelope,
    Oscillator,
    Panner,
    Tone
  }) => {
    if (!Tone.supported) {
      return
    }

    if (!env) {
      env = new Panner(PAN_RIGHT).toMaster()
      env = new AmplitudeEnvelope(SOUND_KICK_ENV).connect(env)
      env.attackCurve = 'exponential'
      new Oscillator(SOUND_KICK_2).connect(env).start()
    }

    // latency.last = env
    tickStop(latency.stop)
    env.triggerAttackRelease(SOUND_KICK_TIME, latency.start)
  })
}
