<template>
  <v-dialog
    v-model="showDialog"
    max-width="280px">
    <v-card>
      <v-card-title>
        <span class="title pa-2">{{ game.constructor.title | titled }}</span>
      </v-card-title>
      <v-card-text
        v-if="!rulesInfo"
        class="pt-0 pb-4">
        <div
          v-for="(r, k) in rulesText"
          :key="k"
          class="px-2">{{ r }}</div>
      </v-card-text>
      <div
        v-if="!rulesInfo"
        class="text-xs-center">
        <g-board
          :game="sample"
          :frame="[240,164]"
          :margin="4"
          class="preview d-inline-block" />
      </div>
      <div v-show="rulesInfo">
        <g-info
          :game="info"
          class="mx-2" />
      </div>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          flat
          style="min-width: 0"
          @click="rulesInfo = !rulesInfo">{{ rulesInfo ? 'Rules' : 'Info' }}</v-btn>
        <v-btn
          flat
          style="min-width: 0"
          @click="showDialog = false">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { dialogLazy } from '../mixins/dialog-lazy'
import {
  update
} from '../../plugins/lib'

export default {
  components: {
    VDialog: () => import('vuetify/es5/components/VDialog'),
    GBoard: () => import('./Board'),
    GInfo: () => import('./Info')
  },
  mixins: [dialogLazy('$parent.rules')],
  props: {
    game: {
      type: Object,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      rulesText: true,
      rulesInfo: false
    }
  },
  computed: {
    sample () {
      const game = new this.game.constructor()
      update(game, this.game.constructor.sample)

      return game
    }
  }
}
</script>
