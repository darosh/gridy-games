export const Constants = {
  MILLISECONDS: 1000,
  LATENCY_DEFAULT: 25,
  LATENCY_RATIO: 2,
  SOUND_POLY: 4,
  PLAYER_DRAW: -1,
  PLAYER_1: 1,
  PLAYER_2: 2,
  PAN_LEFT: -1,
  PAN_RIGHT: 1,
  SOUND_CHORD_TIME: 0.8,
  SOUND_KICK_TIME: 0.2,
  SOUND_CHORD: {
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
  },
  SOUND_FAIL_ENV: {
    'attack': 0.025,
    'decay': 1.2,
    'sustain': 0,
    'release': 1
  },
  SOUND_FAIL_OSC: {
    'type': 'sawtooth',
    'frequency': 'C3',
    'volume': -12
  },
  SOUND_TICK_ENV: {
    attack: 0.025,
    decay: 0.6,
    sustain: 0,
    release: 1
  },
  SOUND_TICK_OSC: {
    type: 'sawtooth',
    frequency: 'G3',
    volume: -12
  },
  SOUND_KICK_ENV: {
    attack: 0.01,
    decay: 0.4,
    sustain: 0.1,
    release: 0.4
  },
  SOUND_KICK_1: {
    type: 'sawtooth3',
    frequency: 'B3',
    volume: -12
  },
  SOUND_KICK_2: {
    type: 'sawtooth3',
    frequency: 'D4',
    volume: -12
  }
}

Object.freeze(Constants)
