<template>
  <v-app
    id="app"
    :dark="$store.state.dark">
    <v-navigation-drawer
      v-model="Shared.menu"
      :touchless="!$route.meta.home"
      class="pb-0"
      fixed
      left
      app
      disable-resize-watcher
      disable-route-watcher>
      <g-home-menu-drawer />
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="Shared.drawer"
      :touchless="$route.meta.home"
      class="pb-3"
      fixed
      right
      app
      disable-resize-watcher
      disable-route-watcher>
      <!-- TODO: use route view? -->
      <g-game-settings-drawer v-if="$route.meta.game && Shared.drawer" />
      <g-online-settings-drawer v-else-if="($route.meta.online || $route.meta.login) && Shared.drawer" />
    </v-navigation-drawer>
    <router-view name="toolbar" />
    <v-content :class="{'no-animation': $route.meta.home}">
      <v-container
        fluid="fluid"
        class="pa-0">
        <keep-alive :include="/Home/">
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
      <v-flex @click="update = false">Update ready!</v-flex>
      <v-btn
        flat
        color="light-blue"
        @click.native="reload()">Reload</v-btn>
    </v-snackbar>
    <g-online-error-dialog v-if="state.error" />
    <g-online-logout-dialog v-if="state.logout" />
    <g-patterns />
  </v-app>
</template>

<script>
import { Games } from '../../plugins/lib'
import { Shared } from '../services/shared'
import { full } from '../services/full'
import { titled } from '../filters/titled'
import { state } from '../services/online/states'

export default {
  components: {
    GHomeMenuDrawer: () => import('./HomeMenuDrawer'),
    GGameSettingsDrawer: () => import('./GameSettingsDrawer'),
    GOnlineSettingsDrawer: () => import('./OnlineSettingsDrawer'),
    GOnlineErrorDialog: () => import('./OnlineErrorDialog'),
    GOnlineLogoutDialog: () => import('./OnlineLogoutDialog'),
    GPatterns: () => import('./BoardPatterns')
  },
  data () {
    return {
      Shared,
      state,
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
    $route: function (val, old) {
      if (val.meta.home) {
        Shared.drawer = false
      }

      Shared.menu = false
      this.update = true
      window.document.documentElement.style.overflowY = this.$route.meta.overflow
      this.updateTheme()
      const title = this.$route.meta.title
      document.getElementsByTagName('title')[0].textContent = titled(
        title.call ? title.call(this) : title
      )
    },
    '$store.state.dark': function () {
      this.updateTheme()
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      next()
      full(this.$store.state.full)
    })
  },
  methods: {
    reload () {
      if (window.$registration && window.$registration.update) {
        window.$registration.update()
      }

      window.location.reload(true)
    },
    updateTheme () {
      const themes = ['background--light', 'background--dark']

      if (this.$store.state.dark) {
        themes.reverse()
      }

      document.firstElementChild.classList.add(themes[0])
      document.firstElementChild.classList.remove(themes[1])

      document
        .getElementsByName('theme-color')[0]
        .setAttribute(
          'content',
          this.$route.meta.theme[!!this.$store.state.dark]
        )
    }
  }
}
</script>

<style>
html {
  overflow-y: auto;
}
.content.no-animation {
  transition: none;
}

.background--light {
  background-color: #fafafa;
}

.background--dark {
  background-color: #303030;
}
</style>
