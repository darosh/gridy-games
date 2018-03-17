import Vue from 'vue'

import {
  Vuetify, // required
  VApp, // required
  VNavigationDrawer,
  VCard,
  VBtn,
  VSpeedDial,
  VSnackbar,
  VIcon,
  VGrid,
  // VSubheader,
  // VProgressCircular,
  VSelect,
  VTextfield,
  VTabs,
  VToolbar,
  // VSwitch,
  // VDivider,
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
    VGrid,
    // VSubheader,
    // VProgressCircular,
    VSelect,
    VTextfield,
    VTabs,
    VToolbar,
    // VSwitch,
    // VDivider,
    transitions
  },
  directives: {
    Ripple,
    Resize,
    Touch
  }
})
