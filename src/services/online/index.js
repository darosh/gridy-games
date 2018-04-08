import { random } from 'gridy-avatars'
import { log } from './log'
import { randomName } from './name'

const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

export const states = {
  INITIALIZED: 0,
  LOADING: 1,
  DISCONNECTED: 2,
  SIGNING: 3,
  LOGIN: 4,
  USER: 5
}

Object.keys(states).forEach(k => { states[states[k]] = k })

const config = process.APP_FIREBASE
let ignoreOnline = false

// firebase.database.enableLogging(true)
export const app = firebase.initializeApp(config)
export const db = app.database()

export const state = {
  value: states.LOADING,
  offset: null
}
export let user = firebase.auth().currentUser
export let userRef = null

export const newGamesRef = db.ref('newGames')
export const gamesRef = db.ref('games')
export const finishedGamesRef = db.ref('finishedGames')
// export const usersRef = db.ref('users').orderByChild('online').equalTo(true)
export const usersRef = db.ref('users')
const connectedRef = firebase.database().ref('.info/connected')

let conRef
let currentRef
let onlineRef
let onlineRefOnDisconnect

const offsetRef = firebase.database().ref('.info/serverTimeOffset')

offsetRef.on('value', function (snap) {
  state.offset = snap.val()
  log(`Server offset: ${state.offset}`)
})

firebase.auth().onAuthStateChanged(setUser)

export function reconnect () {
  initConnected()
  db.goOnline()
  initCurrent()
  state.value = states.USER
}

function initConnected () {
  if (!connectedRef) {
    return
  }

  connectedRef.off('value')

  connectedRef.on('value', function (snap) {
    if (snap.val() === true) {
      log('Connection setting user online:true')
      onlineRef.set(true)
    } else {
      log('Connection setting user online:false')
      onlineRef.set(false)
    }
  })
}

function initCurrent () {
  conRef.remove()
  currentRef = conRef.push(true)

  currentRef.on('value', (snap) => {
    if (!snap.val()) {
      log('Connection replaced', true)
      if (connectedRef) {
        connectedRef.off('value')
      }
      state.value = states.DISCONNECTED
      db.goOffline()
    }
  })
}

function setUser (u) {
  state.value = states.INITIALIZED

  if (onlineRef) {
    onlineRef.off('value')
  }

  if (connectedRef) {
    connectedRef.off('value')
  }

  if (onlineRefOnDisconnect) {
    onlineRefOnDisconnect.cancel()
  }

  if (u) {
    log('Setting user')

    user = u
    userRef = db.ref('users/' + user.uid)
    state.value = states.LOGIN

    userRef.once('value').then(snap => {
      if (!snap.child('name').exists()) {
        userRef.update({
          last: firebase.database.ServerValue.TIMESTAMP,
          name: randomName(),
          avatar: random(),
          online: true,
          guest: user.isAnonymous ? true : null,
          version: process.APP_VERSION
        })
      } else {
        userRef.update({
          last: firebase.database.ServerValue.TIMESTAMP,
          online: true,
          guest: user.isAnonymous ? true : null,
          version: process.APP_VERSION
        })
      }

      state.value = states.USER

      conRef = userRef.child('connection')

      initCurrent()
    })

    onlineRef = userRef.child('online')

    onlineRefOnDisconnect = onlineRef.onDisconnect()
    onlineRefOnDisconnect.set(false)

    initConnected()

    onlineRef.on('value', (snap) => {
      if (ignoreOnline) {
        ignoreOnline = false
        return
      }

      if (!snap.val()) {
        connectedRef.once('value', function (snap) {
          if (snap.val() === true) {
            ignoreOnline = true
            log('Setting user online:true')
            onlineRef.set(true)
          }
        })
      }
    })
  } else {
    log('Resetting user')
    user = null
    userRef = null
  }
}

export function signInAnonym () {
  initConnected()
  db.goOnline()
  state.value = states.SIGNING

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    firebase.auth().signInAnonymously()
  })
}

export function signInGoogle () {
  initConnected()
  db.goOnline()
  state.value = states.SIGNING

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  })
}

export function signInGitHub () {
  initConnected()
  db.goOnline()
  state.value = states.SIGNING

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    var provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider)
  })
}

export function signInTwitter () {
  initConnected()
  db.goOnline()
  state.value = states.SIGNING

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    var provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider)
  })
}

export function logOut () {
  log('Log out')
  log('Log out setting user online:false')
  ignoreOnline = true
  onlineRef.set(false).then(() => {
    firebase.auth().signOut().then(() => {
      user = null
      userRef = null
      state.value = states.INITIALIZED
      db.goOffline()
    })
  })
}
