<template>
  <v-app
    id="app"
    :dark="$store.state.dark">
    <v-navigation-drawer
      v-model="menu"
      fixed
      left
      app
      disable-resize-watcher
      disable-route-watcher>
      <g-menu/>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
      disable-resize-watcher
      disable-route-watcher>
      <g-settings v-if="!$route.meta.home && drawer" />
    </v-navigation-drawer>
    <v-toolbar
      v-show="this.$route.name"
      :class="{'elevation-0': !this.$route.meta.home, 'elevation-1': this.$route.meta.home}"
      :color="this.$store.state.dark ? '' : !this.$route.meta.home ? 'grey lighten-5' : ''"
      :style="{'background-color': this.$store.state.dark ? !this.$route.meta.home ? '#303030' : '' : ''}"
      dense
      app>
      <v-btn
        v-if="!$route.meta.home"
        icon
        to="/">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-btn
        v-else-if="$route.meta.home"
        icon
        @click.stop="menu=!menu">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title :class="{'hidden-xs-only': !this.$route.meta.home}">{{ title }}</v-toolbar-title>
      <v-spacer/>
      <v-btn
        v-if="!$route.meta.home"
        icon
        @click.stop="drawer = !drawer">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content :class="{'no-animation': $route.meta.home}">
      <v-container
        fluid="fluid"
        class="pa-0">
        <keep-alive :include="/Main/">
          <router-view />
        </keep-alive>
      </v-container>
    </v-content>
    <v-snackbar
      v-model="showUpdate"
      :timeout="1e10"
      color="grey darken-3"
      left
      bottom>
      <v-flex
        v-touch="{left: () => update = false, right: () => update = false}"
        @click.native="update = false">Update ready!</v-flex>
      <v-btn
        flat
        color="light-blue"
        @click.native="reload()">Reload</v-btn>
    </v-snackbar>
    <g-patterns />
  </v-app>
</template>

<script>
import { Games } from './lib'

export default {
  components: {
    GMenu: () => import('./components/Menu'),
    GSettings: () => import('./components/Settings'),
    GPatterns: () => import('./components/Patterns')
  },
  data () {
    return {
      drawer: false,
      menu: false,
      update: true
    }
  },
  computed: {
    title () {
      return (
        this.$route.meta.title ||
        (this.$route.params.id && Games[this.$route.params.id + 'Game']
          ? Games[this.$route.params.id + 'Game'].title
          : '')
      )
    },
    showUpdate: {
      get () {
        return this.$store.state.update && this.update
      },
      set (value) {
        this.update = value
      }
    }
  },
  watch: {
    $route: function () {
      this.drawer = false
      this.menu = false
      this.update = true
    }
  },
  methods: {
    reload () {
      if (window.$registration && window.$registration.update) {
        window.$registration.update()
      }

      window.location.reload(true)
    }
  }
}
</script>

<style>
html {
  overflow-y: auto !important;
}
.content.no-animation {
  transition: none;
}
</style>
