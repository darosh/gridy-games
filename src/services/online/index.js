import { log } from './log'
import { states } from './states'

import { random as randomAvatar } from 'gridy-avatars'
import { randomName } from './name'

import Idle from 'idle-js'

const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

const config = process.APP_FIREBASE
const MINUTE = 60000
const IDLE_TIMEOUT = MINUTE * 5

let app
let db

export let state
export let user

export let infoConnectedRef
export let infoOffsetRef

export let userRef
export let userConnectionRef
export let userConnectionCurrentRef
export let userOnlineRef
export let userOnlineRefOnDisconnect

export let usersRef

initialize()
attach()

function initialize () {
  app = firebase.initializeApp(config)
  db = app.database()

  state = {
    value: states.LOADING,
    error: null,
    offset: null
  }

  user = firebase.auth().currentUser
  userRef = null
  usersRef = db.ref('users').orderByChild('online').equalTo(true)
  infoConnectedRef = firebase.database().ref('.info/connected')
  infoOffsetRef = firebase.database().ref('.info/serverTimeOffset')
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  new Idle({ idle: IDLE_TIMEOUT, onIdle }).start()
}

function onIdle () {
  log('Idle', true)
  setState(states.DISCONNECTED)
  goOffline()
}

function attach () {
  infoOffsetRef.on('value', handleOffsetRef)
  infoConnectedRef.on('value', handleInfoConnected)
  firebase.auth().onAuthStateChanged(handleAuthChange)
}

function detach () {
  if (userConnectionCurrentRef) {
    log('Detach userConnectionCurrentRef', true)
    userConnectionCurrentRef.off('value')
  }

  if (userOnlineRef) {
    log('Detach userOnlineRef', true)
    userOnlineRef.off('value')
  }

  if (userOnlineRefOnDisconnect) {
    log('Cancel userOnlineRefOnDisconnect', true)
    userOnlineRefOnDisconnect.cancel()
  }
}

function handleOffsetRef (snap) {
  state.offset = snap.val()
  log(`Server offset: ${state.offset}`)
}

function handleInfoConnected (snap) {
  if (!userOnlineRef) {
    return
  }

  if (snap.val() === true) {
    log('Connection setting user online: true')
    userOnlineRef.set(true)
  } else {
    log('Connection setting user online: false')
    userOnlineRef.set(false)
  }
}

function handleAuthChange (u) {
  log('Auth changed')
  setState(states.INITIALIZED)

  if (u) {
    handleAuthChangeOn(u)
  } else {
    handleAuthChangeOff(u)
  }
}

function handleAuthChangeOn (u) {
  log('Setting user')
  user = u
  userRef = db.ref('users/' + user.uid)
  setState(states.LOGIN)
  userRef.once('value').then(handleUserInit)
}

function handleAuthChangeOff (u) {
  log('Resetting user')
  detach()
  user = null
  userRef = null
  userOnlineRef = null
  userConnectionRef = null
  userConnectionCurrentRef = null
}

function handleUserInit (snap) {
  const last = firebase.database.ServerValue.TIMESTAMP
  const name = randomName()
  const avatar = randomAvatar()
  const online = true
  const authed = true
  const guest = user.isAnonymous
  const version = process.APP_VERSION

  if (!snap.child('name').exists()) {
    userRef.update({
      last,
      name,
      avatar,
      online,
      authed,
      guest
    }, () => {
      setState(states.USER)
    })
  } else {
    userRef.update({
      last,
      online,
      authed,
      version
    })
    setState(states.USER)
  }

  userConnectionRef = userRef.child('connections')
  userOnlineRef = userRef.child('online')
  userOnlineRefOnDisconnect = userOnlineRef.onDisconnect()
  userOnlineRefOnDisconnect.set(false)
  setCurrentConnection()
}

function setCurrentConnection (reconnect) {
  if (reconnect && userConnectionCurrentRef) {
    userConnectionCurrentRef.off('value')
  }

  userConnectionRef.remove()
  userConnectionCurrentRef = userConnectionRef.push(true)
  userConnectionCurrentRef.on('value', handleUserConnectionCurrent)
}

function handleUserConnectionCurrent (snap) {
  if (!snap.val()) {
    log('Connection replaced', true)
    setState(states.DISCONNECTED)
    goOffline()
  }
}

function setState (s) {
  log(`State: ${states[s]}`, 1)
  state.value = s
}

function setError (e) {
  console.error(e)
  state.error = e
  setState(states.SIGNING)
}

function goToOffline () {
  log('Gone offline', true)
  db.goOffline()
}

function goOffline () {
  log('Going offline', true)

  if (userOnlineRef) {
    log('Setting user online: false')
    userOnlineRef.set(false, goToOffline)
  } else {
    goToOffline()
  }
}

function goOnline () {
  log('Going online')
  db.goOnline()
}

export function updateUser (values) {
  values.last = firebase.database.ServerValue.TIMESTAMP
  userRef.update(values)
}

export function reconnect () {
  goOnline()
  setCurrentConnection(true)
  setState(states.USER)
}

export function logOut () {
  log('Log out')
  log('Log out setting user online+authed: false')
  setState(states.LOGOUT)

  userRef.update({online: false, authed: false, connections: null}).then(() => {
    log('Log out setting user online+authed: false DONE')

    firebase.auth().signOut().then(() => {
      log('Log out DONE')

      setTimeout(() => {
        goOffline()
        user = null
        userRef = null
        setState(states.INITIALIZED)
      }, 200)
    })
  })
}

export function signInAnonym () {
  goOnline()
  setState(states.SIGNING)
  firebase.auth().signInAnonymously().catch(setError)
}

export function signInGoogle () {
  goOnline()
  setState(states.SIGNING)
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(setError)
}

export function signInGitHub () {
  goOnline()
  setState(states.SIGNING)
  firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).catch(setError)
}

export function signInTwitter () {
  goOnline()
  setState(states.SIGNING)
  firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider()).catch(setError)
}
