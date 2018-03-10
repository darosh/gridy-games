<template>
  <div
    v-resize="onResize"
    :class="theme">
    <v-layout
      column
      wrap
      align-center
      align-content-center>
      <div
        class="mt-1"
        style="text-align: center">
        <v-layout
          row
          mb-2
          px-2
          style="height: 48px">
          <v-flex
            xs6
            class="pr-2">
            <g-player
              v-if="game"
              :value="1"
              :game="game"
              :waiting="waiting" />
          </v-flex>
          <div
            style="min-width: 32px;"
            class="text-xs-center">
            <div
              v-if="game.score"
              class="display-1">
              <v-icon v-if="game.score[1] > game.score[2]">chevron_right</v-icon>
              <v-icon v-else-if="game.score[1] < game.score[2]">chevron_left</v-icon>
            </div>
          </div>
          <v-flex
            xs6
            class="pl-2">
            <g-player
              v-if="game"
              :value="2"
              :game="game"
              :waiting="waiting"
              :switcher="canSwitch"
              :class="{clickable: canSwitch}"
              @click.native="canSwitch && switchPlayer()" />
          </v-flex>
        </v-layout>
        <g-board
          :game="game"
          :frame="frame"
          :margin="margin"
          :move="move"
          :vertical="vertical"
          :waiting="waiting"
          interactive/>
      </div>
    </v-layout>
    <v-speed-dial
      v-model="fab"
      style="z-index: 9"
      fixed
      right
      bottom
      direction="top"
      transition="slide-y-reverse-transition">
      <v-fab-transition slot="activator">
        <v-btn
          v-if="game.moves.length"
          v-model="fab"
          :color="$store.state.dark ? 'grey darken-4' : 'grey darken-3'"
          dark
          fab
          hover>
          <v-icon class="white--text">gamepad</v-icon>
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-btn
        v-if="game.moves.length"
        fab
        dark
        small
        color="grey darken-3"
        @click.stop="undo()">
        <v-icon class="white--text">undo</v-icon>
      </v-btn>
      <v-btn
        v-if="game.moves.length"
        fab
        dark
        small
        color="grey darken-3"
        @click.stop="reset()">
        <v-icon class="white--text">refresh</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-snackbar
      v-model="snackbar"
      :timeout="12000"
      color="grey darken-3"
      top>
      <v-flex
        v-touch="{left: () => snackbar = false, right: () => snackbar = false}"
        @click.native="snackbar = false">
        <span v-if="game.winner">{{ verdict }}</span>
      </v-flex>
      <v-btn
        flat
        color="light-blue"
        @click.native="snackbar = false; reset()">Restart</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import {
  Games,
  TimedProxy,
  initActions,
  initHighlight,
  selectAction,
  undoAction
} from '../lib'
import { isHuman } from '../services/players'
import { Bus } from '../services/bus'
import { PlayerWorker } from '../worker'
import { theme } from '../style/theme'
import { Shared } from '../services/shared'
import {
  latency,
  chordSound,
  kick1Sound,
  kick2Sound
} from '../services/sound'
import { kickVibration } from '../services/vibration'
import resize from '../mixins/resize'
import session from '../mixins/session'

const LATENCY = 2

export default {
  components: {
    GPlayer: () => import('./Player'),
    GBoard: () => import('./Board')
  },
  mixins: [resize, session],
  data () {
    return {
      game: null,
      frame: null,
      margin: 20,
      fab: false,
      working: false,
      robotPlayer: {},
      theme: null,
      snackbar: false
    }
  },
  watch: {
    'game.player': function () {
      this.robot()
    },
    // "game.moves.length": function() {
    // },
    'game.winner': function (value) {
      if (value) {
        this.snackbar = true
        this.update()

        if (this.$store.state.sound) {
          setTimeout(() => { chordSound(value) }, 200 - latency.latency)
        }
      }
    },
    '$store.state.player': {
      handler: function () {
        this.initRobots()
        this.initTimer()
        this.robot()
      },
      deep: true
    },
    '$store.state.timer': function (value) {
      this.initTimer()
    }
  },
  mounted () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  created () {
    this.initGame()
    this.initRobots()
    this.onResize()
    this.update()
    Bus.$on('game', this.update)
  },
  destroyed () {
    Bus.$off('game', this.update)
    this.destroyRobots()

    if (this.game.dispose) {
      this.game.dispose()
    }
  },
  methods: {
    initTimer () {
      this.game.limit = this.hotSeat ? this.$store.state.timer : 0
    },
    ...mapMutations(['setPlayer']),
    initGame () {
      if (!this.human[1] && this.human[2]) {
        this.switchPlayer()
      }

      const g = this.$route.params.id + 'Game'
      const game = new Games[g]()
      initHighlight(game)
      const timed = new TimedProxy(game)
      this.game = Shared.game = timed
      this.theme = theme(Games[g])
      this.initTimer()
    },
    switchPlayer () {
      this.setPlayer({
        1: this.$store.state.player[2],
        2: this.$store.state.player[1]
      })
      this.initRobots()
    },
    initRobot (robot) {
      return isHuman(robot)
        ? false
        : new PlayerWorker(robot, this.$route.params.id)
    },
    destroyRobots () {
      if (this.robotPlayer[1]) {
        this.robotPlayer[1].terminate()
      }

      if (this.robotPlayer[2]) {
        this.robotPlayer[2].terminate()
      }
    },
    initRobots () {
      this.destroyRobots()
      this.robotPlayer = {
        1: this.initRobot(this.$store.state.player[1]),
        2: this.initRobot(this.$store.state.player[2])
      }
    },
    kickSound () {
      if (this.$store.state.sound) {
        if (this.game.player === 1) {
          kick1Sound()
        } else {
          kick2Sound()
        }
      }

      if (this.$store.state.vibration && !this.robotMatch) {
        kickVibration(
          50,
          this.$store.state.sound ? LATENCY * latency.latency : 0
        )
      }
    },
    robot () {
      const player = this.robotPlayer[this.game.player]

      if (!this.working && !this.game.winner && player) {
        this.working = true
        player.select(this.game).then(move => {
          this.working = false
          undoAction(this.game)
          this.kickSound()
          this.game.move(move.move)
          this.update()
          this.robot()
        })
      }
    },
    move (tile) {
      if (this.game.winner) {
        return
      }

      const action = selectAction(this.game, tile)

      if (action === false) {
        return
      }

      this.kickSound()

      if (action) {
        undoAction(this.game)
        this.game.move(action)
        this.update()
      }
    },
    update () {
      undoAction(this.game)

      if (this.game.winner) {
        return
      }

      initActions(this.game, this.game.possible())
    },
    undo () {
      this.snackbar = false
      this.game.undo()
      this.game.undo()
      this.update()
    },
    reset () {
      this.fab = false
      this.snackbar = false
      this.initGame()
      this.onResize()
      this.initRobots()
      this.update()
      this.robot()
    }
  }
}
</script>

<style scoped>
.clickable:hover {
  cursor: pointer;
}
</style>
