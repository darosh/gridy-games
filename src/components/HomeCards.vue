<template>
  <v-container
    grid-list-lg
    fluid>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="game in Shared.items"
        :key="game.id"
        xs12
        sm6
        md3
        lg2>
        <v-card
          :to="{name: 'game', params: {id: game.id}}"
          height="100%"
          class="gpu">
          <v-card-title>
            <div>
              <div class="headline">{{ game.title | titled }}</div>
              <span class="grey--text">{{ game.type }}</span>
            </div>
            <v-flex
              v-if="game.created"
              class="body-2 text-xs-right">{{ game.created | era }}
            </v-flex>
          </v-card-title>
          <div style="min-height: 112px">
            <div
              v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, game.id)"
              v-show="show"
              class="text-xs-center"
              style="min-height: 112px">
              <g-board
                v-if="initialized[game.id]"
                v-once
                :game="game.instance"
                :frame="[164,96]"
                :margin="4"
                class="preview d-inline-block" />
            </div>
          </div>
          <v-card-text :class="{'pt-4': game.wip}">
            <div
              v-if="game.wip"
              class="red--text body-1 pb-3"
              style="position: absolute; bottom: 0">
              <i>Not implemented yet</i>
            </div>
            <div
              v-if="game.authors"
              class="body-1">{{ game.authors }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Shared } from '../services/shared'
import Vue from 'vue'

export default {
  name: 'HomeCards',
  components: {
    GBoard: () => import('./Board')
  },
  data () {
    return {
      Shared,
      initialized: {},
      visible: {},
      show: false
    }
  },
  watch: {
    '$route.meta.cards': {
      immediate: true,
      handler (value) {
        setTimeout(() => {
          this.show = value
        }, value ? 600 : 0)
      }
    }
  },
  methods: {
    visibilityChanged (isVisible, entry, id) {
      if (!this.$route.meta.cards) {
        return
      }

      if (isVisible) {
        Vue.set(this.initialized, id, isVisible)
        Vue.set(this.visible, id, isVisible)
      } else {
        Vue.set(this.visible, id, isVisible)
      }
    }
  }
}
</script>
