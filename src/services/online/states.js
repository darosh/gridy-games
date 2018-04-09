export const states = {
  INITIALIZED: 0,
  LOADING: 1,
  DISCONNECTED: 2,
  SIGNING: 3,
  LOGIN: 4,
  USER: 5,
  LOGOUT: 6
}

Object.keys(states).forEach(k => { states[states[k]] = k })
