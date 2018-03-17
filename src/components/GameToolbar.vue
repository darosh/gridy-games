<template>
  <v-toolbar
    :color="this.$store.state.dark ? '' : !this.$route.meta.home ? 'grey lighten-5' : ''"
    :style="{'background-color': this.$store.state.dark ? !this.$route.meta.home ? '#303030' : '' : ''}"
    class="elevation-0"
    dense
    app>
    <v-btn
      :href="homeLink"
      icon
      @click.native="back">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-spacer v-if="$store.state.maximize"></v-spacer>
    <g-players v-if="$store.state.maximize" />
    <v-toolbar-title v-else class="hidden-xs-only">{{ title | titled }}</v-toolbar-title>
    <v-spacer/>
    <v-btn
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
      homeLink: this.$router.resolve('/').href
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
