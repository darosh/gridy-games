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
          <v-flex class="body-1">Dark</v-flex>
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

    <div class="text-xs-center">
    <img class="mb-3 mt-1" src="static/img/icons/icon.svg" alt="Logo" width="112" />
    </div>

    <v-divider/>
    <v-toolbar
      dense
      flat
      color="transparent">
      <v-subheader class="pl-3">Acknowledgement</v-subheader>
    </v-toolbar>

    <div class="mx-3 mb-3">
      <v-layout
        v-for="d in dependencies"
        :key="d.text"
        row
        mx-3
        align-center
        mb-3>
        <div
          class="body-1 pr-3"><a
            :href="d.link"
            target="_blank"
            rel="noopener"
            class="light-blue--text">{{ d.text }}</a></div>
        <v-divider></v-divider>
        <div v-if="d.version" class="pl-3">{{d.version}}</div>
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
      ],
      dependencies: Object.keys(process.APP_DEPENDENCIES).map((k) => {
        const v = process.APP_DEPENDENCIES[k]

        return {
          link: v.startsWith('github') ? `https://github.com/${v.replace('github:', '')}` : `https://www.npmjs.com/package/${k}`,
          text: k.replace(/@.*\//, ''),
          version: v.replace(/\^/, '').replace(/github:.*/, '')
        }
      }).sort((a, b) => a.text.localeCompare(b.text))
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
