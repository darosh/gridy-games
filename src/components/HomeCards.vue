<template>
  <div class="app-grid pa-3">
    <v-card
      class="app-grid-1"
      color="transparent"
      flat>

      <v-icon
        style="position: absolute;"
        class="bg-icon">gridy</v-icon>
      <div class="pa-5">
        <div class="display-1 text-xs-left mb-4">Offline games</div>
        <ul
          class="headline ml-4"
          style="opacity: 0.87">
          <li>
            Play against computer
          </li>
          <li>
            Play with friend
            <span class="body-1">on shared phone/tablet</span>
          </li>
        </ul>
      </div>
    </v-card>
    <v-card
      v-if="useFirebase"
      class="app-grid-2"
      color="transparent"
      flat>
      <div class="mx-0">
        <v-divider style="position: relative; margin-top: -4px; margin-bottom: 3px;"/>
      </div>
      <v-icon
        style="position: absolute;"
        class="bg-icon">earth</v-icon>
      <div class="pa-5">
        <div class="display-1 text-xs-left mb-3">Online
          <small style="opacity: 0.5">coming soon</small>
        </div>
        <ul
          class="headline ml-4"
          style="opacity: 0.87">
          <li>
            Play against online players
          </li>
          <li>
            Real time
            <span class="body-1">1 minute per turn</span>
          </li>
        </ul>
      </div>
    </v-card>
    <div
      v-for="game in Shared.items"
      :key="game.id"
      pt-2
      pb-2>
      <v-card
        :to="{name: 'game', params: {id: game.id}}"
        height="100%"
        class="gpu">
        <v-card-title>
          <div>
            <div
              :class="{'red--text': game.wip}"
              :style="{'text-decoration': game.wip ? 'line-through' : ''}"
              class="headline">{{ game.title | titled }}</div>
            <span class="grey--text">{{ game.group }}</span>
          </div>
        </v-card-title>
        <div style="min-height: 116px; position: relative">
          <div
            v-observe-visibility="!show ? null : (isVisible, entry) => visibilityChanged(isVisible, entry, game.id)"
            v-show="show"
            class="text-xs-center"
            style="min-height: 116px">
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
        <div style="height: 32px"/>
        <v-layout
          row
          class="px-3 pb-2"
          style="position: absolute; bottom: 0; left: 0; right: 0">
          <v-flex
            v-if="game.originals.original && game.location"
            class="d-flex body-1 mb-1">{{ game.location }}</v-flex>
          <v-flex
            v-else-if="!game.originals.original"
            class="grey--text text-xs-center d-flex body-1 mb-1">
            <i>{{ game.original }} variation</i>
          </v-flex>
          <v-flex
            v-if="game.originals.original && game.created"
            class="body-2 text-xs-right mb-1">{{ game.created | era }}
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>

<script>
import { Shared } from '../services/shared'
import Vue from 'vue'

// const a = [0, 24]
const b = [2, 19]
const s = 101
const m = 2.5
const p = b[1] / (s - m * 2) / 2

const iconBox = `${b[0] - p * m * 2} ${b[0] - p * m * 2} ${b[1] +
  p * m * 4} ${b[1] + p * m * 4}`

let timeout

export default {
  name: 'HomeCards',
  components: {
    VDivider: () => import('vuetify/es5/components/VDivider'),
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
      show: false,
      useFirebase: !!process.APP_FIREBASE
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
    this.cancelTimeout()
    timeout = setTimeout(() => {
      this.show = true
    }, 600)
  },
  deactivated () {
    this.cancelTimeout()
    timeout = setTimeout(() => {
      this.show = false
    }, 0)
  },
  methods: {
    cancelTimeout () {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
    },
    visibilityChanged (isVisible, entry, id) {
      if (this.show && isVisible && !this.initialized[id]) {
        Vue.set(this.initialized, id, isVisible)
      }
    }
  }
}
</script>

<style scoped>
.app-grid {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(12, 1fr);
}

.app-grid-1 {
  grid-column: 1 / 3;
  grid-row: 1;
}

.app-grid-2 {
  grid-column: 1 / 3;
  grid-row: 2;
}

@media (max-width: 1904px) {
  .app-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
@media (max-width: 1264px) {
  .app-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media (max-width: 960px) {
  .app-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .app-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .app-grid-1 {
    grid-column: 1;
    grid-row: 1;
  }
  .app-grid-2 {
    grid-column: 1;
    grid-row: 2;
  }
}

li {
  list-style-type: square;
}

.bg-icon {
  width: 100%;
  height: 100%;
  text-align: right;
  display: block;
}
.bg-icon svg {
  display: inline-block;
  height: 100%;
  width: auto;
  opacity: 0.08;
}
</style>
