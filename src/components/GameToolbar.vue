<template>
  <v-toolbar
    :color="this.$store.state.dark ? '' : !this.$route.meta.home ? 'grey lighten-5' : ''"
    :style="{'background-color': this.$store.state.dark ? !this.$route.meta.home ? '#303030' : '' : ''}"
    class="elevation-0"
    dense
    app>
    <v-btn
      icon
      to="/">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title class="hidden-xs-only">{{ title | titled }}</v-toolbar-title>
    <v-spacer/>
    <v-btn
      icon
      @click.stop="Shared.drawer = !Shared.drawer">
      <v-icon>settings</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import {Shared} from '../services/shared'
import {Games} from '../lib'

export default {
  data () {
    return {
      Shared
    }
  },
  computed: {
    title () {
      return this.$route.params.id && Games[this.$route.params.id + 'Game']
        ? Games[this.$route.params.id + 'Game'].title
        : ''
    }
  }
}
</script>
