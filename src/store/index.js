import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'
import {
  defaultPlayers
} from '../services/players'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const STORAGE = 'gridy-games'

let value

const state = ((value = localStorage.getItem(STORAGE)) && (JSON.parse(value))) || {
  player: defaultPlayers(),
  timer: 15000,
  sound: false,
  dark: false,
  vibration: true
}

state.update = window.$update

function storage (store) {
  store.subscribe((mutation, state) => {
    const value = Object.assign({}, state)
    delete value.update
    localStorage.setItem(STORAGE, JSON.stringify(value))
  })

  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE && e.newValue !== e.oldValue) {
      store.commit('assign', JSON.parse(e.newValue))
    }
  })
}

const plugins = [storage]

// if (debug) {
//   plugins.push(createLogger())
// }

const $store = new Vuex.Store({
  // modules: {},
  state,
  plugins,
  getters: {
    player: state => state.player
  },
  mutations: {
    assign: (state, payload) => Object.assign(state, payload),
    dark: (state, payload) => (state.dark = payload),
    vibration: (state, payload) => (state.vibration = payload),
    sound: (state, payload) => (state.sound = payload),
    timer: (state, payload) => (state.timer = payload),
    update: (state, payload) => (state.update = payload),
    setPlayer: (state, payload) => (state.player = payload),
    assignPlayer: (state, payload) => Object.assign(state.player, payload)
  },
  actions: {},
  strict: debug
})

window.$store = $store

export default $store
