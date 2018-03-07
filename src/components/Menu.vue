<template>
  <div>
    <div class="mb-3">
      <v-toolbar dense flat color="transparent">
        <v-subheader class="pl-3">Options</v-subheader>
      </v-toolbar>
      <div class="mx-3">
        <v-layout row mx-3 align-center>
          <v-flex class="body-1">Dark theme</v-flex>
          <div>
            <v-switch v-model="useDark" hide-details color="light-blue" />
          </div>
        </v-layout>
      </div>
    </div>
    <v-divider/>
    <v-toolbar dense flat color="transparent">
      <v-subheader class="pl-3">Application</v-subheader>
    </v-toolbar>
    <v-list dense class="mx-3 pt-0">
      <v-list-tile>
        <v-list-tile-content class="body-2">Version</v-list-tile-content>
        <v-list-tile-content class="align-end body-1">{{ version }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content class="body-2">Build</v-list-tile-content>
        <v-list-tile-content class="align-end body-1">{{ build }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content class="body-2">Games</v-list-tile-content>
        <v-list-tile-content class="align-end body-1">{{ games }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content class="body-2">Source</v-list-tile-content>
        <v-list-tile-content class="align-end body-1">
          <a target="_blank" rel="noopener" href="https://github.com/darosh/gridy-games" class="light-blue--text">github.com</a>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { Games } from "../lib";

export default {
  data() {
    return {
      version: process.APP_VERSION,
      build: new Date(process.APP_BUILD).toLocaleString("en"),
      games: Object.keys(Games).length
    };
  },
  computed: {
    useDark: {
      get() {
        return this.$store.state.dark;
      },
      set(value) {
        this.$store.commit("dark", value);
      }
    }
  }
};
</script>
