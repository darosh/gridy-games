import { log } from './log'
import { messages, states, state } from './states'

import { random as randomAvatar } from 'gridy-avatars'
import { randomName } from './name'

// import Idle from 'idle-js'

const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')
require('firebase/functions')

const config = process.env.APP_FIREBASE
// const MINUTE = 60000
// const IDLE_TIMEOUT = MINUTE * 5

let app
let db
let attached

export let user

export let infoConnectedRef
export let infoOffsetRef

export let userRef
export let userOnlineRef
export let userOnlineRefOnDisconnect
export let onlineTimestampCount
export let onlineTimestamp

export let usersRef
export let ignoredAuth
export let expectAuth

let ignoreDisconnection = 0

initializeAuth()
attachAuth()

function initializeAuth () {
  setState(states.NULL, messages.INITIALIZING)
  app = firebase.initializeApp(config)
  user = firebase.auth().currentUser
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
}

function initializeDatabase () {
  db = app.database()
  userRef = null
  usersRef = db.ref('users').orderByChild('online').startAt(1)
  infoConnectedRef = firebase.database().ref('.info/connected')
  infoOffsetRef = firebase.database().ref('.info/serverTimeOffset')
  // new Idle({ idle: IDLE_TIMEOUT, onIdle }).start()
}

// function onIdle () {
//   log('Idle', 2)
//   setState(states.DISCONNECTED_IDLE)
//   goOffline()
// }

function attachAuth () {
  expectAuth = true
  firebase.auth().onAuthStateChanged(handleAuthChange)
}

function attachDatabase () {
  infoOffsetRef.on('value', handleOffsetRef)
  infoConnectedRef.on('value', handleInfoConnected)
}

function attach () {
  onlineTimestampCount = 0
  userOnlineRef = userRef.child('online')
  attachUserOnlineRefOnDisconnect()
  log('Attach online', 3)
  userOnlineRef.on('value', handleUserOnlineOn)
  attached = true
}

function attachUserOnlineRefOnDisconnect () {
  log('Attach on disconnect', 3)
  userOnlineRefOnDisconnect = userOnlineRef.onDisconnect()
  userOnlineRefOnDisconnect.set(0, userOnlineRefOnDisconnectDone)
}

function userOnlineRefOnDisconnectDone (error) {
  log('On disconnect DONE', 3)

  if (error) {
    log(error, 2)
  }

  // TODO ???
  // attachUserOnlineRefOnDisconnect()
}

function detach () {
  // if (userConnectionCurrentRef) {
  //   log('Detach userConnectionCurrentRef', 2)
  //   userConnectionCurrentRef.off('value')
  // }

  onlineTimestampCount = 0

  if (userOnlineRef) {
    log('Detach online', 3)
    userOnlineRef.off('value')
  }

  if (userOnlineRefOnDisconnect) {
    log('Cancel on disconnect', 3)
    userOnlineRefOnDisconnect.cancel()
  }

  attached = false
}

function handleOffsetRef (snap) {
  state.offset = snap.val()
  log(`Server offset: ${state.offset}`)
}

function handleInfoConnected (snap) {
  const val = snap.val()

  log('Connection changed to: ' + val, 2)

  if (ignoreDisconnection) {
    log('Ignoring diconnection,forced')
    ignoreDisconnection--
    return
  }

  if (!userOnlineRef) {
    log('Ignoring diconnection, no user')
    return
  }

  if (!val) {
    // log('Lost connection setting user offline')
    // userOnlineRef.set(0)
    log('Connection lost', 2)
    setState(states.DISCONNECTED_NET)
    goOffline()
  }
}

function handleAuthChange (u) {
  log('Auth changed')

  setState(states.INITIALIZED)

  state.guest = u && u.isAnonymous

  if (!expectAuth && u) {
    log('Auth ignored', 2)
    ignoredAuth = u
    handleAuthChangeOff()
    setState(states.DISCONNECTED_OTHER)
    return
  } else {
    ignoredAuth = false
    expectAuth = false
  }

  if (u) {
    // log('User')
    // log(u)
    // log('Provider: ' + u.providerId)
    // log('Token')
    // log(u.getIdToken())
    handleAuthChangeOn(u)
  } else {
    handleAuthChangeOff()
  }
}

function handleAuthChangeOn (u) {
  setState(null, messages.CONNECTING)

  if (!db) {
    log('Initializing database')
    initializeDatabase()
    attachDatabase()
  } else {
    goOnline()
  }

  log('Setting user')
  user = u
  userRef = db.ref('users/' + user.uid)
  setState(states.LOGIN)
  userRef.once('value').then(handleUserInit)
}

function handleAuthChangeOff () {
  log('Resetting user')
  detach()
  user = null
  userRef = null
  userOnlineRef = null
  // userConnectionRef = null
  // userConnectionCurrentRef = null
}

function handleUserInit (snap) {
  const last = firebase.database.ServerValue.TIMESTAMP
  const name = randomName()
  const avatar = randomAvatar()
  const online = firebase.database.ServerValue.TIMESTAMP
  const authed = true
  const guest = user.isAnonymous
  const version = process.env.APP_VERSION

  setState(null, messages.UPDATING_USER)

  if (!snap.child('name').exists()) {
    log('Setting meta')

    userRef.update({
      last,
      name,
      avatar,
      online,
      authed,
      guest
    }, () => {
      log('Setting meta DONE')
      setState(states.USER)
    })
  } else {
    log('Updating meta')

    userRef.update({
      last,
      online,
      authed,
      version
    }, () => {
      log('Updating meta DONE')
      setState(states.USER)
    })
  }

  // userConnectionRef = userRef.child('connections')
  attach()
  // setCurrentConnection()
}

function handleUserOnlineOn (snap) {
  onlineTimestampCount++

  if (onlineTimestampCount === 1) {
    return
  }

  const val = snap.val()
  log('Online counter: ' + onlineTimestampCount)

  if (onlineTimestampCount === 2) {
    onlineTimestamp = val
    return
  }

  if (!val) {
    return
  }

  log('Connection replaced', 2)
  setState(states.DISCONNECTED_OTHER)
  goOffline(true)
}

function setCurrentOnlineTimestamp (reconnect) {
  onlineTimestampCount = 0
  onlineTimestamp = undefined

  if (reconnect && !attached) {
    attach()
  }

  userOnlineRef.set(firebase.database.ServerValue.TIMESTAMP)
}

// function setCurrentConnection (reconnect) {
//   if (reconnect && userConnectionCurrentRef) {
//     userConnectionCurrentRef.off('value')
//   }

//   userConnectionRef.remove()
//   userConnectionCurrentRef = userConnectionRef.push(true)
//   userConnectionCurrentRef.on('value', handleUserConnectionCurrent)
// }

// function handleUserConnectionCurrent (snap) {
//   if (!snap.val()) {
//     log('Connection replaced', 2)
//     setState(states.DISCONNECTED_OTHER)
//     goOffline(true)
//   }
// }

function setState (s, m) {
  if ((s !== null) && !isNaN(s)) {
    log(`State: ${states[s]}`, 1)

    if (states[s] === undefined) {
      throw new Error('Undefined state: ', s)
    }

    state.value = s
  }

  if (m) {
    log(`Message: ${m}`, 1)
    state.message = m
  }
}

function setError (e) {
  console.error(e)
  state.error = e
  setState(states.INITIALIZED)
}

function goToOffline (external) {
  if (external) {
    ignoreDisconnection++
    detach()
  }

  log('Gone offline', 2)
  db.goOffline()
}

function goOffline (external) {
  log('Going offline', 2)

  if (userOnlineRef && !external) {
    log('Setting user online: 0')
    // userOnlineRef.set(0, goToOffline)
    userOnlineRef.set(0)
    goToOffline()
  } else {
    goToOffline(external)
  }
}

function goOnline () {
  log('Going online')
  db.goOnline()
}

export function onlineUsersFnc () {
  return firebase.functions().httpsCallable('onlineUsers')
}

export function bindingData () {
  setState(null, messages.BINDING)
}

export function updateUser (values) {
  values.last = firebase.database.ServerValue.TIMESTAMP
  userRef.update(values)
}

export function disconnect () {
  ignoreDisconnection++
  goOffline()
  setState(states.DISCONNECTED_NET)
}

export function reconnect () {
  log('Reconnecting')

  if (ignoredAuth) {
    expectAuth = true
    handleAuthChange(ignoredAuth)
  } else {
    setState(state.LOADING, messages.RECONNECTING)
    goOnline()
    setCurrentOnlineTimestamp(true)
    setState(states.USER)
  }

  log('Reconnecting DONE')
}

export function deleteOut () {
  expectAuth = true
  log('Delete user data', 2)
  detach()
  setState(null, messages.DELETING_DATA)
  userRef.remove().then(() => {
    log('Delete user', 2)
    setState(null, messages.DELETING_USER)

    user.delete()
      .then(() => {
        log('Delete user DONE', 2)
        setState(states.INITIALIZED)
      })
      .catch(setError)
  })
}

export function logOut () {
  expectAuth = true
  log('Resetting log out')
  setState(states.LOGOUT)
  detach()

  userRef.update({ online: 0, authed: false }).then(() => {
    log('Resetting log out DONE')

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

function restoreIgnored (cb) {
  expectAuth = true
  setState(states.SIGNING, messages.INITIALIZING)

  if (ignoredAuth) {
    handleAuthChange(ignoredAuth)
  } else {
    cb()
  }
}

export function signInAnonym () {
  restoreIgnored(() => firebase.auth().signInAnonymously().catch(setError))
}

export function signInGoogle () {
  restoreIgnored(() => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(setError))
}

export function signInGitHub () {
  restoreIgnored(() => firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).catch(setError))
}

export function signInTwitter () {
  restoreIgnored(() => firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider()).catch(setError))
}
