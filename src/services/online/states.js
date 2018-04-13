export const states = {
  NULL: 0,
  INITIALIZED: 1,
  LOADING: 2,
  DISCONNECTED_NET: 3,
  DISCONNECTED_OTHER: 4,
  DISCONNECTED_IDLE: 5,
  SIGNING: 6,
  LOGIN: 7,
  USER: 8
}

Object.keys(states).forEach(k => { states[states[k]] = k })

Object.freeze(states)

export const messages = {
  INITIALIZING: 'Initializing…',
  RECONNECTING: 'Reconnecting…',
  CONNECTING: 'Connecting to database…',
  UPDATING_USER: 'Updating player…',
  DELETING_DATA: 'Erasing data…',
  DELETING_USER: 'Removing player…',
  BINDING: 'Joining…'
}

Object.freeze(messages)

export const state = {
  value: null,
  message: null,
  error: null,
  offset: null,
  logout: false
}

export function isState (s) {
  if (!states[s]) {
    throw new Error('Unknown state ', s)
  }

  return state.value === s
}

export function isReady () {
  return state.value === states.USER
}

export function isDisconnected () {
  return state.value <= states.DISCONNECTED_IDLE
}

export function canReconnect () {
  return state.value === states.DISCONNECTED_IDLE ||
    state.value === states.DISCONNECTED_NET ||
    state.value === states.DISCONNECTED_OTHER
}
