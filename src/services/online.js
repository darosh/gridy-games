import * as firebase from 'firebase'
import { random } from 'gridy-avatars'
import { random as randomHero } from '../../plugins/superheroes'

export const states = {
  LOADING: 0,
  INITIALIZED: 1,
  DISCONNECTED: 2,
  SIGNING: 3,
  LOGIN: 4,
  USER: 5
}

const config = process.APP_FIREBASE

// firebase.database.enableLogging(true)
export const app = firebase.initializeApp(config)
export const db = app.database()

export const state = {
  user: firebase.auth().currentUser,
  userRef: null,
  value: states.LOADING
}
export const newGamesRef = db.ref('newGames')
export const gamesRef = db.ref('games')
export const finishedGamesRef = db.ref('finishedGames')
// export const usersRef = db.ref('users').orderByChild('online').equalTo(true)
export const usersRef = db.ref('users')

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
      console.log('other login', state.user)
      state.value = states.DISCONNECTED
      db.goOffline()
    }
  })
}

function setUser (user) {
  state.value = states.INITIALIZED
  console.log('setUser', user)

  if (user) {
    state.user = user
    state.userRef = db.ref('users/' + user.uid)
    state.value = states.LOGIN

    state.userRef.once('value').then(snap => {
      if (!snap.child('name').exists()) {
        state.userRef.update({
          last: firebase.database.ServerValue.TIMESTAMP,
          name: randomName(),
          avatar: random(),
          online: true
        })
      } else {
        state.userRef.update({
          last: firebase.database.ServerValue.TIMESTAMP,
          online: true
        })
      }

      state.value = states.USER

      conRef = state.userRef.child('connection')

      initCurrent()
    })

    onlineRef = state.userRef.child('online')

    onlineRef.onDisconnect().set(false)

    const connectedRef = firebase.database().ref('.info/connected')

    connectedRef.on('value', function (snap) {
      if (snap.val() === true) {
        onlineRef.set(true)
      } else {
        onlineRef.set(false)
      }
    })

    // let ignoreOnline = false

    // onlineRef.on('value', (snap) => {
    //   if (ignoreOnline) {
    //     ignoreOnline = false
    //     return
    //   }

    //   if (!snap.val()) {
    //     connectedRef.once('value', function (snap) {
    //       if (snap.val() === true) {
    //         ignoreOnline = true
    //         onlineRef.set(true)
    //       }
    //     })
    //   }
    // })
  } else {
    state.user = null
    state.userRef = null
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

export function createGame () {
  newGamesRef.push({
    createdBy: state.user.uid,
    createdAt: state.user.database.ServerValue.TIMESTAMP,
    player1: state.user.uid,
    player2: null
  })
}

export function logOut () {
  onlineRef.set(false)

  firebase.auth().signOut().then(() => {
    state.user = null
    state.userRef = null
    state.value = states.INITIALIZED
    db.goOffline()
  })
}

export function availableChanged (value) {
  state.userRef.update({
    last: firebase.database.ServerValue.TIMESTAMP,
    available: value
  })
}
