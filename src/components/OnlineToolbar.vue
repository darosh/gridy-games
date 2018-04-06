<template>
  <v-toolbar
    :color="$store.state.dark ? 'grey darken-3' : 'grey lighten-3'"
    :style="{'background-color': this.$store.state.dark ? !this.$route.meta.home ? '#303030' : '' : ''}"
    class="elevation-1"
    dense
    app>
    <v-btn
      :href="homeLink"
      aria-label="Home"
      icon
      @click.native="back">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-spacer/>
    <v-btn
      v-if="state.user"
      aria-label="Log out"
      icon
      @click.native="logOut()">
      <v-icon>logout</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { Shared } from '../services/shared'
import { Games } from '../../plugins/lib'
import { full } from '../services/full'
import { state, logOut } from "../services/online";

let wayToHome = null

function guard (to, from, next) {
  if (wayToHome === null) {
    if (from.meta.home) {
      wayToHome = -1
    } else {
      wayToHome = 0
    }
  } else if (wayToHome) {
    wayToHome--
  }

  next()
}

export default {
  components: {
  },
  data () {
    return {
      Shared,
      homeLink: this.$router.resolve('/').href,
      state
    }
  },
  destroyed () {
    wayToHome = null
  },
  beforeRouteUpdate: guard,
  beforeRouteEnter: guard,
  methods: {
    logOut,
    back (event) {
      full(this.$store.state.full)

      if (wayToHome) {
        event.preventDefault()
        this.$router.go(wayToHome)
      }
    }
  }
}
</script>
