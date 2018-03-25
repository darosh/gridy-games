import Vue from 'vue'

import {
  VApp,
  VBtn,
  VCard,
  VGrid,
  VIcon,
  VNavigationDrawer,
  VSelect,
  VSnackbar,
  VSpeedDial,
  VTabs,
  VToolbar,
  Vuetify,
  transitions
} from 'vuetify'

import {
  Ripple,
  Resize
} from 'vuetify/es5/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VGrid,
    VIcon,
    VNavigationDrawer,
    VSelect,
    VSnackbar,
    VSpeedDial,
    VTabs,
    VToolbar,
    transitions
  },
  directives: {
    Ripple,
    Resize
  }
})
