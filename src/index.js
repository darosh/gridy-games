// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'intersection-observer'
import Vue from 'vue'
import App from './App'
import router from './router'
import '../plugins/vuetify'
import './style/index.styl'
import store from './store'
import * as icons from '../plugins/icons'
import { era, hyphenated, multiplied, titled } from './filters'

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

require('vuetify/src/stylus/app.styl')

// Vue.use(Vuetify)

Vue.config.productionTip = false

window.$icons = icons

Vue.filter('hyphenated', hyphenated)
Vue.filter('multiplied', multiplied)
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
