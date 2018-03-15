<template>
  <v-toolbar
    v-show="this.$route.name"
    :color="$store.state.dark ? 'grey darken-3' : 'grey lighten-3'"
    :dense="!Shared.searching"
    :extended="Shared.searching"
    :height="Shared.searching ? 82 : null"
    class="elevation-1"
    tabs
    scroll-off-screen
    app>
    <v-btn
      v-if="!Shared.searching"
      icon
      @click.stop="Shared.menu=!Shared.menu">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-toolbar-title
      v-if="!Shared.searching"
      class="hidden-xs-only">Gridy Games</v-toolbar-title>
    <v-spacer v-if="!Shared.searching" />
    <v-select
      v-if="Shared.searching"
      v-model="Shared.search"
      :items="Shared.words"
      :search-input.sync="input"
      :class="this.$store.state.dark ? 'grey darken-1' : 'white'"
      :append-icon-cb="() => {Shared.searching = !Shared.searching}"
      :loading="Shared.loading"
      label="Search"
      combobox
      class="mx-3"
      prepend-icon="search"
      append-icon="close"
      browser-autocomplete="off"
      spellcheck="false"
      autocomplete
      solo
      flat
      hide-details
      single-line />
    <v-btn
      v-if="!Shared.searching"
      icon
      @click.stop="Shared.searching = !Shared.searching">
      <v-icon>search</v-icon>
    </v-btn>
    <v-spacer
      v-if="Shared.searching"
      slot="extension" />
    <div
      :class="{'mr-3': Shared.searching}"
      :slot="Shared.searching ? 'extension' : null">
      <v-tabs
        color="transparent"
        slider-color="light-blue">
        <v-tab :to="{path: '/'}">
          Cards
        </v-tab>
        <v-tab :to="{path: '/table'}">
          Table
        </v-tab>
      </v-tabs>
    </div>
  </v-toolbar>
</template>

<script>
import { Shared } from '../services/shared'
import { search } from '../worker/search'

export default {
  components: {
    VSelect: () => import('vuetify/es5/components/VSelect')
  },
  data () {
    return {
      Shared,
      input: null
    }
  },
  watch: {
    'input': function (n, o) {
      this.updateSearch(this.input || Shared.search)
    },
    'Shared.search': function () {
      this.updateSearch(Shared.search)
    },
    'Shared.searching': function () {
      setTimeout(() => {
        this.updateSearch(Shared.searching ? Shared.search : '')
      }, 50)
    }
  },
  methods: {
    updateSearch (value, oldValue) {
      Shared.loading = true
      search(value).then(({ items, words }) => {
        Shared.words = words
        Shared.items = items
        Shared.loading = false
      })
    }
  }
}
</script>
