<template>
  <v-dialog
    v-model="showDialog"
    max-width="280px">
    <v-card>
      <v-card-title>
        <span class="title pa-2">No moves available</span>
      </v-card-title>
      <div
        :class="{[theme]: true}"
        class="text-xs-center">
        <div
          :class="{['player-' + sessionOther]: true}"
          class="d-inline-block relative player"
          style="height: 120px; width: 120px">
          <svg
            height="120"
            width="120"
            class="d-block absolute">
            <circle
              :class="'symbol-' + sessionOther"
              cx="60"
              cy="60"
              r="60" />
          </svg>
          <v-icon class="absolute player-status icon-large">close</v-icon>
        </div>
      </div>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          flat
          style="min-width: 0"
          @click="game.start(); showDialog = false">Pass</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { dialogLazy } from '../mixins/dialog-lazy'

export default {
  components: {
    VDialog: () => import('vuetify/es5/components/VDialog')
  },
  mixins: [dialogLazy('$parent.passConfirm')],
  props: {
    theme: {
      type: String,
      required: true
    },
    game: {
      type: Object,
      required: true
    },
    sessionOther: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.icon-large > svg,
.divider-large {
  width: 96px;
  height: 96px;
  margin: 12px;
}
.icon-large {
  display: block;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
</style>
