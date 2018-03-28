import { tickStop } from './tick'
import { latency } from './latency'
import { Constants } from './constants'

const {
  SOUND_POLY,
  PLAYER_DRAW,
  PLAYER_1,
  PLAYER_2,
  SOUND_CHORD_TIME,
  SOUND_CHORD
} = Constants

let env

const types = {
  [PLAYER_DRAW]: ['C2', 'E3', 'G3', 'C4'],
  [PLAYER_1]: ['B2', 'G3', 'B3', 'D4'],
  [PLAYER_2]: ['A2', 'F3', 'A3', 'D4']
}

export function chordSound (type = PLAYER_1) {
  import('../../../plugins/tone').then(({
    PolySynth,
    Tone
  }) => {
    if (!Tone.supported) {
      return
    }

    if (!env) {
      env = new PolySynth(SOUND_POLY).toMaster()
      env.set(SOUND_CHORD)
    }

    tickStop(latency.stop)
    env.triggerAttackRelease(types[type], SOUND_CHORD_TIME, latency.start)
  })
}
