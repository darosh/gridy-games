<template>
  <v-toolbar
    :color="this.$store.state.dark ? '' : !this.$route.meta.home ? 'grey lighten-5' : ''"
    :style="{'background-color': this.$store.state.dark ? !this.$route.meta.home ? '#303030' : '' : ''}"
    class="elevation-0"
    dense
    app>
    <v-btn
      :href="homeLink"
      aria-label="Home"
      icon
      @click.native="back">
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn
      v-if="useFirebase && isReady()"
      :to="{path: '/online'}"
      color="light-blue--text"
      icon>
      <v-icon>earth</v-icon>
    </v-btn>
    <v-spacer/>
    <g-players />
    <!-- <v-toolbar-title v-else class="hidden-xs-only">{{ title | titled }}</v-toolbar-title> -->
    <v-spacer/>
    <v-btn
      aria-label="Settings"
      icon
      @click.stop="Shared.drawer = !Shared.drawer">
      <v-icon>settings</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { Shared } from '../services/shared'
import { Games } from '../../plugins/lib'
import { full } from '../services/full'
import { isReady } from '../services/online/states'

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
    GPlayers: () => import('./Players')
  },
  data () {
    return {
      Shared,
      homeLink: this.$router.resolve('/').href,
      useFirebase: !!process.env.APP_FIREBASE
    }
  },
  computed: {
    title () {
      return this.$route.params.id && Games[this.$route.params.id + 'Game']
        ? Games[this.$route.params.id + 'Game'].title
        : ''
    }
  },
  destroyed () {
    wayToHome = null
  },
  beforeRouteUpdate: guard,
  beforeRouteEnter: guard,
  methods: {
    isReady,
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
