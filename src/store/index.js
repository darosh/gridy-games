import Vue from 'vue'
import Vuex from 'vuex'
import { defaultPlayers } from '../services/players'
import storage from './storage'
// import createLogger from 'vuex/dist/logger'

const STORAGE = 'gridy-games' + '-' + process.env.APP_STORAGE_VERSION

const { state, plugin: storagePlugin } = storage(
  {
    sound: false,
    dark: true,
    vibration: true,
    rules: true
  },
  {
    player: defaultPlayers(),
    timer: 10000,
    full: false,
    coords: false
  },
  {
    update: window.$update || false,
    registration: !!window.$registration || false
  },
  STORAGE
)

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const plugins = [storagePlugin]

// if (debug) {
//   plugins.push(createLogger())
// }

const $store = new Vuex.Store({
  state,
  plugins,
  getters: {
    player: state => state.player
  },
  mutations: {
    assign: (state, payload) => Object.assign(state, payload),
    dark: (state, payload) => (state.dark = payload),
    full: (state, payload) => (state.full = payload),
    coords: (state, payload) => (state.coords = payload),
    vibration: (state, payload) => (state.vibration = payload),
    sound: (state, payload) => (state.sound = payload),
    timer: (state, payload) => (state.timer = payload),
    update: (state, payload) => (state.update = payload),
    registration: (state, payload) => (state.registration = payload),
    player: (state, payload) => (state.player = payload),
    rules: (state, payload) => (state.rules = payload)
  },
  actions: {},
  strict: debug
})

window.$store = $store

export default $store
