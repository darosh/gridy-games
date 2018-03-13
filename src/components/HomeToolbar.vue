<template>
  <v-toolbar
    v-show="this.$route.name"
    :style="{'background-color': this.$store.state.dark ? !this.$route.meta.home ? '#303030' : '' : ''}"
    :dense="!Shared.searching"
    :extended="Shared.searching"
    class="elevation-1"
    tabs
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
    <v-text-field
      v-if="Shared.searching"
      v-model="Shared.search"
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
    <v-tabs
      :slot="Shared.searching ? 'extension' : null"
      :class="{'mr-3': Shared.searching}"
      style="width: auto"
      color="transparent"
      right
      slider-color="light-blue">
      <v-tab :to="{path: '/'}">
        Cards
      </v-tab>
      <v-tab :to="{path: '/table'}">
        Table
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
import {Shared} from '../services/shared'

export default {
  data () {
    return {
      Shared
    }
  }
}
</script>
