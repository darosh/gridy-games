<template>
  <v-dialog
    v-model="showDialog"
    transition="slide-y-reverse-transition"
    max-width="880">
    <v-card :color="$store.state.dark ? 'grey darken-4' : 'grey lighten-3'">
      <v-card-title class="title pa-4">Preferred games</v-card-title>
      <div class="app-grid px-4 pb-2">
        <v-card
          v-ripple
          v-for="(g, k) in games"
          :color="$store.state.dark ? 'grey darken-3' : 'white'"
          :key="k"
          class="py-2">
          <g-icon
            :game="g.instance"
            :type="g.grid"
            class="preview preview-md d-block mx-1"
            style="position: absolute; left: 2px" />
          <v-icon style="position: absolute; right: 8px">check</v-icon>
          <div style="line-height: 24px; padding: 0 32px 0 40px">{{ g.title }}</div>
        </v-card>
      </div>
      <v-card-actions class="action-buttons">
        <v-btn flat>Select All</v-btn>
        <v-spacer />
        <v-btn
          flat
          @click="showDialog = !showDialog">Dismiss</v-btn>
        <v-btn flat>Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Info } from '../../plugins/lib'
import { dialogLazy } from '../mixins/dialog-lazy'

const games = Info.games
export default {
  components: {
    VDialog: () => import('vuetify/es5/components/VDialog'),
    GIcon: () => import('./Icon')
  },
  mixins: [dialogLazy('$parent.showSelect')],
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      games
    }
  }
}
</script>

<style scoped>
.action-buttons * {
  min-width: 0;
}
.app-grid {
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 900px) {
  .app-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 700px) {
  .app-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .app-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
