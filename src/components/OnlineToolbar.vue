<template>
  <v-toolbar
    :color="$store.state.dark ? 'grey darken-3' : 'grey lighten-3'"
    :style="{'background-color': this.$store.state.dark ? !this.$route.meta.home ? '#303030' : '' : ''}"
    class="elevation-1"
    dense
    scroll-off-screen
    app>
    <v-btn
      :href="homeLink"
      aria-label="Home"
      icon>
      <v-icon>home</v-icon>
    </v-btn>
    <v-toolbar-title class="hidden-xs-only">
      Gridy Games Online
    </v-toolbar-title>
    <v-spacer/>
    <v-btn
      v-if="state.value >= states.LOGIN"
      aria-label="Log out"
      icon
      @click.native="logOut()">
      <v-icon>logout</v-icon>
    </v-btn>
    <v-btn
      v-if="state.value === states.DISCONNECTED"
      aria-label="Log out"
      icon
      @click.native="reconnect()">
      <v-icon>sync_disabled</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { Shared } from '../services/shared'
import { state, logOut, reconnect } from '../services/online'
import { states } from '../services/online/states'

export default {
  components: {
  },
  data () {
    return {
      Shared,
      homeLink: this.$router.resolve('/').href,
      state,
      states
    }
  },
  methods: {
    logOut,
    reconnect
  }
}
</script>
