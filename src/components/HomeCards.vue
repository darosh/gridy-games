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
        lg2
        pt-3
        pb-0>
        <v-card
          :to="{name: 'game', params: {id: game.id}}"
          height="100%"
          class="gpu">
          <v-layout
            column
            align-content-end
            fill-height>
            <v-flex py-0>
              <v-card-title>
                <div>
                  <div
                    class="headline"
                    :class="{'red--text': game.wip}"
                    :style="{'text-decoration': game.wip ? 'line-through' : ''}">{{ game.title | titled }}</div>
                  <span class="grey--text">{{ game.type }}</span>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex py-0>
              <div
                fill-height
                style="min-height: 112px; position: relative">
                <div
                  v-observe-visibility="!show ? null : (isVisible, entry) => visibilityChanged(isVisible, entry, game.id)"
                  v-show="show"
                  class="text-xs-center"
                  style="min-height: 112px">
                  <g-board
                    v-if="initialized[game.id]"
                    v-once
                    v-model="rendered[game.id]"
                    :game="game.instance"
                    :frame="[164,96]"
                    :margin="4"
                    fixed
                    class="preview d-inline-block" />
                </div>
                <div
                  v-show="!show || !rendered[game.id]"
                  class="text-xs-center"
                  style="position: absolute; top: 0; left:0; right: 0">
                  <g-icon
                    :game="game.instance"
                    :type="game.grid"
                    :size="iconSize"
                    :box="iconBox"
                    class="preview preview-md d-inline-block" />
                </div>
              </div>
            </v-flex>
            <v-flex
              d-flex
              align-end
              fill-height
              align-content-end
              py-0>
              <v-card-text>
                <v-layout
                  row
                  fill-height
                  align-content-end
                  align-end>
                  <v-flex
                    v-if="game.location"
                    class="grey--text d-flex body-1">{{ game.location }}</v-flex>
                  <v-flex
                    v-if="game.created"
                    class="body-2 text-xs-right">{{ game.created | era }}
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Shared } from '../services/shared'
import Vue from 'vue'

const a = [0, 24]
const b = [2, 19]
const s = 101
const m = 2.5
const p = b[1] / (s - m * 2) / 2

const iconBox = `${b[0] - p * m * 2} ${b[0] - p * m * 2} ${b[1] +
  p * m * 4} ${b[1] + p * m * 4}`

export default {
  name: 'HomeCards',
  components: {
    GBoard: () => import('./Board'),
    GIcon: () => import('./Icon')
  },
  data () {
    return {
      iconSize: s,
      Shared,
      iconBox,
      initialized: {},
      rendered: {},
      show: false
    }
  },
  watch: {
    'Shared.items': {
      immediate: true,
      handler (items) {
        items.forEach(game => {
          if (this.initialized[game.id] === undefined) {
            Vue.set(this.initialized, game.id, false)
          }
        })
      }
    }
  },
  activated () {
    setTimeout(() => {
      this.show = true
    }, 600)
  },
  deactivated () {
    setTimeout(() => {
      this.show = false
    }, 0)
  },
  methods: {
    visibilityChanged (isVisible, entry, id) {
      if (this.show && isVisible && !this.initialized[id]) {
        Vue.set(this.initialized, id, isVisible)
      }
    }
  }
}
</script>
