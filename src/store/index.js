import Vue from 'vue'
import Vuex from 'vuex'
import {
  defaultPlayers
} from '../services/players'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  player: defaultPlayers(),
  update: window.$update,
  timer: 15000,
  sound: false,
  dark: false,
  vibration: true
}

const $store = new Vuex.Store({
  // modules: {},
  state,
  getters: {
    player: state => state.player
  },
  mutations: {
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
  // plugins: debug ? [createLogger()] : []
})

window.$store = $store

export default $store
