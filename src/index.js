import '../plugins/helpers'
import '../plugins/debug'
import '../plugins/visibility'
import '../plugins/vuetify'
import * as icons from '../plugins/icons'

import Vue from 'vue'

import router from './router'
import store from './store'

import App from './components/App'

import './style/index.styl'

import { era, link, titled } from './filters'

if (process.APP_FIREBASE) {
  const VueFire = require('vuefire')
  Vue.use(VueFire)
}

require('vuetify/src/stylus/app.styl')

Vue.config.productionTip = false

window.$icons = icons

Vue.filter('era', era)
Vue.filter('link', link)
Vue.filter('titled', titled)

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
