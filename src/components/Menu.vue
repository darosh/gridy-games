<template>
  <div>
    <div class="mb-3">
      <v-toolbar
        dense
        flat
        color="transparent">
        <v-subheader class="pl-3">Options</v-subheader>
      </v-toolbar>
      <div class="mx-3">
        <v-layout
          row
          mx-3
          align-center>
          <v-flex class="body-1">Dark theme</v-flex>
          <div>
            <v-switch
              v-model="useDark"
              hide-details
              color="light-blue" />
          </div>
        </v-layout>
      </div>
    </div>
    <v-divider/>
    <v-toolbar
      dense
      flat
      color="transparent">
      <v-subheader class="pl-3">Application</v-subheader>
    </v-toolbar>

    <div class="mx-3 mb-3">
      <v-layout
        v-for="m in meta"
        :key="m.title"
        row
        mx-3
        align-center
        mb-3>
        <v-flex class="body-2">{{ m.title }}</v-flex>
        <div
          v-if="m.link"
          class="body-1"><a
            :href="m.link"
            target="_blank"
            rel="noopener"
            class="light-blue--text">{{ m.value }}</a></div>
        <div
          v-else
          class="body-1">{{ m.value }}</div>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { Games } from '../lib'

export default {
  data () {
    return {
      meta: [
        {title: 'Version', value: process.APP_VERSION},
        {title: 'Build', value: new Date(process.APP_BUILD).toLocaleString('en')},
        {title: 'Games', value: Object.keys(Games).length},
        {title: 'Source', value: 'github.com', link: 'https://github.com/darosh/gridy-games'}
      ]
    }
  },
  computed: {
    useDark: {
      get () {
        return this.$store.state.dark
      },
      set (value) {
        this.$store.commit('dark', value)
      }
    }
  }
}
</script>
