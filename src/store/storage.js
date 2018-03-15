function stored (key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (ignore) {
    return {}
  }
}

function save (state, keys, name) {
  const obj = Object.keys(keys).reduce((r, key) => {
    r[key] = state[key]
    return r
  }, {})

  const value = JSON.stringify(obj)

  if (localStorage.getItem(name) !== value) {
    localStorage.setItem(name, value)
  }
}

export default function (global, session, temp, key) {
  let state = {}
  Object.assign(state, global)
  Object.assign(state, session)
  Object.assign(state, temp)

  Object.assign(state, stored(`${key}-global`))
  Object.assign(state, stored(`${key}-session`))

  function plugin (store) {
    store.subscribe((mutation, state) => {
      console.log(mutation)

      if (global.hasOwnProperty(mutation.type)) {
        save(state, global, `${key}-global`)
      } else if (session.hasOwnProperty(mutation.type)) {
        save(state, session, `${key}-session`)
      }
    })

    window.addEventListener('storage', function (e) {
      if (e.key === `${key}-global` && e.newValue !== e.oldValue) {
        store.commit('assign', JSON.parse(e.newValue))
      }
    })
  }

  return {
    state,
    plugin
  }
}
