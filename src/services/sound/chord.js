import { tickStop } from './tick'
import { latency } from './latency'

let env

const types = {
  '-1': ['C2', 'E3', 'G3', 'C4'],
  1: ['B2', 'G3', 'B3', 'D4'],
  2: ['A2', 'F3', 'A3', 'D4']
}

export function chordSound (type = 1) {
  import('../../../plugins/tone').then(({
    PolySynth,
    Tone
  }) => {
    if (!Tone.supported) {
      return
    }

    if (!env) {
      env = new PolySynth(4).toMaster()
      env.set({
        envelope: {
          attack: 0.01,
          decay: 0.4,
          sustain: 0.1,
          release: 0.4
        },
        oscillator: {
          type: 'sawtooth3'
        },
        volume: -10
      })
    }

    tickStop(latency.stop)

    env.triggerAttackRelease(types[type], 0.8, latency.start)
  })
}
