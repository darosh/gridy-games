<template>
  <div>
    <v-toolbar
      dense
      flat
      color="transparent">
      <v-subheader class="pl-0">Players</v-subheader>
      <v-spacer/>
      <v-btn
        icon
        @click="switchOponents()">
        <v-icon>swap_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="mx-3 mb-3 ">
      <v-select
        v-model="player1"
        :items="players"
        :class="$store.state.dark ? 'grey darken-2' : 'grey lighten-4'"
        label="Player 1"
        solo
        single-line
        bottom
        hide-details
        class="mb-2" />
      <v-select
        v-model="player2"
        :items="players"
        :class="$store.state.dark ? 'grey darken-2' : 'grey lighten-4'"
        label="Plaayer 2"
        solo
        single-line
        bottom
        hide-details
        class="mb-2" />
    </div>
    <v-divider/>
    <div>
      <v-toolbar
        dense
        flat
        color="transparent">
        <v-subheader class="pl-3">Options</v-subheader>
      </v-toolbar>
      <div class="mx-3 mb-3">
        <v-layout
          v-if="isHuman(this.$store.state.player[1]) && isHuman(this.$store.state.player[2])"
          row
          mx-3
          align-center
          style="margin-top: -16px">
          <v-flex class="body-1">Timer</v-flex>
          <div>
            <v-select
              v-model="timer"
              :items="timers"
              single-line
              bottom
              hide-details
              class="mb-3" />
          </div>
        </v-layout>
        <v-layout
          row
          mx-3
          align-center>
          <v-flex class="body-1">Sound</v-flex>
          <div>
            <v-switch
              v-model="useSound"
              hide-details
              color="light-blue" />
          </div>
        </v-layout>
        <v-layout
          v-if="canVibrate"
          row
          mx-3
          align-center>
          <v-flex class="body-1">Vibration</v-flex>
          <div>
            <v-switch
              v-model="useVibration"
              hide-details
              color="light-blue" />
          </div>
        </v-layout>
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
        <v-layout
          row
          mx-3
          align-center>
          <v-flex class="body-1">Fullscreen</v-flex>
          <div>
            <v-switch
              v-model="useFullscreen"
              hide-details
              color="light-blue" />
          </div>
        </v-layout>
      </div>
    </div>
    <v-divider/>
    <div class="mx-3 mb-3">
      <v-toolbar
        dense
        flat
        color="transparent">
        <v-subheader class="pl-0 ml-0">Turns</v-subheader>
        <v-spacer/>
        <div
          v-if="Shared.game.moves.length"
          class="body-2">{{ Shared.game.moves.length }}</div>
      </v-toolbar>

      <v-text-field
        v-model="record"
        :class="$store.state.dark ? 'grey darken-2' : 'grey lighten-4'"
        solo
        spellcheck="false"
        name="input-turns"
        placeholder="Insert turns"
        multi-line
        auto-grow
        rows="3" />
    </div>
    <v-divider/>
    <v-toolbar
      dense
      flat
      color="transparent">
      <v-subheader class="pl-3">Info</v-subheader>
    </v-toolbar>
    <g-info :game="game" />
  </div>
</template>

<script>
import { players, isHuman } from '../services/players'
import { Shared } from '../services/shared'
import { Info, reset, stringify, update } from '../../plugins/lib'
import { Bus } from '../services/bus'
import { kick1Sound } from '../services/sound/kick1'
import { kickVibration } from '../services/vibration/index'
import { full } from '../services/full'

export default {
  components: {
    GInfo: () => import('./Info')
  },
  data () {
    return {
      game: Info.game(this.$route.params.id),
      players: Object.keys(players).map(p => ({ text: p, value: p })),
      Shared,
      timers: [
        { text: 'No timer', value: 0 },
        { text: '5 seconds', value: 5000 },
        { text: '15 seconds', value: 15000 },
        { text: '30 seconds', value: 30000 },
        { text: '1 minute', value: 60000 }
      ],
      canVibrate: !!window.navigator.vibrate
    }
  },
  computed: {
    timer: {
      get: function () {
        return this.$store.state.timer
      },
      set: function (value) {
        this.$store.commit('timer', value)
      }
    },
    player1: {
      get: function () {
        return this.$store.state.player[1]
      },
      set: function (value) {
        this.$store.commit('assignPlayer', { 1: value })
      }
    },
    player2: {
      get: function () {
        return this.$store.state.player[2]
      },
      set: function (value) {
        this.$store.commit('assignPlayer', { 2: value })
      }
    },
    record: {
      get: function () {
        if (this.Shared.game) {
          return stringify(this.Shared.game).join(', ')
        } else {
          return ''
        }
      },
      set: function (value) {
        reset(this.Shared.game)
        update(this.Shared.game, value)
        Bus.$emit('game')
      }
    },
    useSound: {
      get: function () {
        return this.$store.state.sound
      },
      set: function (value) {
        if (value) {
          setTimeout(kick1Sound)
        }

        this.$store.commit('sound', value)
      }
    },
    useVibration: {
      get: function () {
        return this.$store.state.vibration
      },
      set: function (value) {
        if (value) {
          setTimeout(kickVibration)
        }

        this.$store.commit('vibration', value)
      }
    },
    useDark: {
      get () {
        return this.$store.state.dark
      },
      set (value) {
        this.$store.commit('dark', value)
      }
    },
    useFullscreen: {
      get () {
        return this.$store.state.full
      },
      set (value) {
        this.$store.commit('full', value)
        full(value)
      }
    }
  },
  methods: {
    isHuman,
    switchOponents () {
      this.$store.commit('setPlayer', {
        1: this.$store.state.player[2],
        2: this.$store.state.player[1]
      })
    }
  }
}
</script>
