import { random } from 'gridy-avatars'
import { random as randomHero } from '../../plugins/superheroes'

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
  value: states.LOADING
}
export let user = firebase.auth().currentUser
export let userRef = null

export const newGamesRef = db.ref('newGames')
export const gamesRef = db.ref('games')
export const finishedGamesRef = db.ref('finishedGames')
export const usersRef = db.ref('users').orderByChild('online').equalTo(true)
// export const usersRef = db.ref('users')

let conRef
let currentRef
let onlineRef

firebase.auth().onAuthStateChanged(setUser)

function randomDigit () {
  return Math.floor(Math.random() * 9) + 1
}

function randomLetter () {
  const a = 'A'.charCodeAt(0)
  const z = 'Z'.charCodeAt(0)

  return String.fromCharCode(Math.floor(Math.random() * (z - a + 1)) + a)
}

export function randomName () {
  return `${randomHero()} ${randomLetter()}${randomDigit()}`
}

export function reconnect () {
  db.goOnline()
  initCurrent()
  state.value = states.USER
}

function initCurrent () {
  conRef.remove()
  currentRef = conRef.push(true)

  currentRef.on('value', (snap) => {
    if (!snap.val()) {
      state.value = states.DISCONNECTED
      db.goOffline()
    }
  })
}

function setUser (u) {
  state.value = states.INITIALIZED

  if (u) {
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
          guest: user.isAnonymous ? true : null
        })
      } else {
        userRef.update({
          last: firebase.database.ServerValue.TIMESTAMP,
          online: true,
          guest: user.isAnonymous ? true : null
        })
      }

      state.value = states.USER

      conRef = userRef.child('connection')

      initCurrent()
    })

    onlineRef = userRef.child('online')

    onlineRef.onDisconnect().set(false)

    const connectedRef = firebase.database().ref('.info/connected')

    connectedRef.on('value', function (snap) {
      if (snap.val() === true) {
        log('Connection setting user online:true')
        onlineRef.set(true)
      } else {
        log('Connection setting user online:false')
        onlineRef.set(false)
      }
    })

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
    user = null
    userRef = null
    state.value = states.INITIALIZED
  }
}

export function signInAnonym () {
  db.goOnline()
  state.value = states.SIGNING

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    firebase.auth().signInAnonymously()
  })
}

export function signInGoogle () {
  db.goOnline()
  state.value = states.SIGNING

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  })
}

export function signInGitHub () {
  db.goOnline()
  state.value = states.SIGNING

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    var provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider)
  })
}

export function signInTwitter () {
  db.goOnline()
  state.value = states.SIGNING

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    var provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider)
  })
}

// export function createGame () {
//   newGamesRef.push({
//     createdBy: state.user.uid,
//     createdAt: state.user.database.ServerValue.TIMESTAMP,
//     player1: state.user.uid,
//     player2: null
//   })
// }

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

function log (msg) {
  console.log(`%c${msg}`, 'background-color: lightgreen')
}
