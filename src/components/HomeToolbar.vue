<template>
  <v-toolbar
    v-show="this.$route.name"
    :style="{'background-color': this.$store.state.dark ? !this.$route.meta.home ? '#303030' : '' : ''}"
    :dense="!Shared.searching"
    :extended="Shared.searching"
    class="elevation-1"
    :height="Shared.searching ? 82 : null"
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
      browser-autocomplete="off"
      spellcheck="false"
      autocomplete
      :loading="Shared.loading"
      cache-items
      :items="Shared.words"
      :search-input.sync="Shared.search"
      v-model="input"
      :class="this.$store.state.dark ? 'grey darken-3' : 'grey lighten-2'"
      :append-icon-cb="() => {Shared.searching = !Shared.searching}"
      label="Search"
      class="mx-3"
      prepend-icon="search"
      append-icon="close"
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
  data () {
    return {
      Shared,
      input: Shared.search
    }
  },
  watch: {
    'Shared.search': function () { this.updateSearch(Shared.search) },
    'Shared.searching': function () { this.updateSearch(Shared.searching ? Shared.search : '') }
  },
  methods: {
    updateSearch (value) {
      Shared.loading = true
      search(value).then(({items, words}) => {
        Shared.words = words
        Shared.items = items
        Shared.loading = false
      })
    }
  }
}
</script>
