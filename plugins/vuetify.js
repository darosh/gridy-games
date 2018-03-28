import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'

import {
  VApp,
  VBtn,
  VCard,
  VFooter,
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
  theme: {
    primary: colors.lightBlue.base
  },
  components: {
    VApp,
    VBtn,
    VCard,
    VFooter,
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
