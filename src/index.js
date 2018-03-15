import '../plugins/visibility'
import '../plugins/vuetify'
import * as icons from '../plugins/icons'

import Vue from 'vue'

import router from './router'
import store from './store'

import App from './components/App'

import './style/index.styl'

import { era, titled } from './filters'

require('vuetify/src/stylus/app.styl')

Vue.config.productionTip = false

window.$icons = icons

Vue.filter('titled', titled)
Vue.filter('era', era)

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
