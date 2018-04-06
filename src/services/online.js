import * as firebase from 'firebase'

const config = process.APP_FIREBASE

export const app = firebase.initializeApp(config)
export const db = app.database()
export const state = {user: firebase.auth().currentUser, userRef: null}
export const newGamesRef = db.ref('newGames')
export const gamesRef = db.ref('games')
export const finishedGamesRef = db.ref('finishedGames')
export const usersRef = db.ref('users')

firebase.auth().onAuthStateChanged(setUser)

function setUser (user) {
  if (user) {
    state.user = user
    state.userRef = db.ref('users/' + user.uid)
    state.userRef.update({
      last: firebase.database.ServerValue.TIMESTAMP,
      name: user.displayName,
      available: true
    })
  } else {
    state.user = null
    state.userRef = null
  }
}

export function signInAnonym () {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    firebase.auth().signInAnonymously()
  })
}

export function signInGoogle () {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
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
  firebase.auth().signOut().then(() => {
    state.user = null
  })
}

export function availableChanged (value) {
  state.userRef.update({
    last: firebase.database.ServerValue.TIMESTAMP,
    available: value
  })
}
