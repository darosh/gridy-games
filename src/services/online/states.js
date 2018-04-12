export const states = {
  INITIALIZED: 0,
  LOADING: 1,
  DISCONNECTED_NET: 2,
  DISCONNECTED_IDLE: 3,
  SIGNING: 4,
  LOGIN: 5,
  USER: 6,
  LOGOUT: 7
}

Object.keys(states).forEach(k => { states[states[k]] = k })

export const messages = {
  INITIALIZING: 'Initializing…',
  CONNECTING: 'Connecting to database…',
  UPDATING_USER: 'Updating player…'
}
