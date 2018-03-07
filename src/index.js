// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import './style/index.styl'
import store from './store'
import * as icons from '../plugins/icons'

import {
  Vuetify, // required
  VApp, // required
  VNavigationDrawer,
  VCard,
  VBtn,
  VSpeedDial,
  VSnackbar,
  VIcon,
  VList,
  VGrid,
  VSubheader,
  VSelect,
  VTextfield,
  VToolbar,
  VSwitch,
  VDivider,
  transitions
} from 'vuetify'
import {
  Ripple,
  Resize,
  Touch
} from 'vuetify/es5/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VCard,
    VBtn,
    VSpeedDial,
    VSnackbar,
    VIcon,
    VList,
    VGrid,
    VSubheader,
    VSelect,
    VTextfield,
    VToolbar,
    VSwitch,
    VDivider,
    transitions
  },
  directives: {
    Ripple,
    Resize,
    Touch
  }
})

require('vuetify/src/stylus/app.styl')

// Vue.use(Vuetify)

Vue.config.productionTip = false

window.$icons = icons

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  render: h => h(App)
})
