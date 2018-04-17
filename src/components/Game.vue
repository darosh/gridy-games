<template>
  <div
    v-resize="onResize"
    :class="theme">
    <v-layout
      style="margin-bottom: -36px"
      column
      wrap
      align-center
      align-content-center>
      <div
        class="mt-1-5"
        style="text-align: center">
        <g-board
          :game="game"
          :coords="$store.state.coords"
          :frame="frame"
          :margin="margin"
          :move="move"
          :vertical="vertical"
          :waiting="sessionWaiting"
          interactive
          centered/>
      </div>
    </v-layout>

    <v-footer
      v-if="game.moves.length && game.score"
      app
      fixed
      height="auto"
      color="transparent"
      class="pb-2">
      <v-flex
        class="title text-xs-right"
        style="width: 60px">{{ game.score[1] }}</v-flex>
      <g-player-divider class="mx-3 d-block" />
      <v-flex
        class="title text-xs-left"
        style="width: 60px">{{ game.score[2] }}</v-flex>
    </v-footer>

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

    <g-game-info-dialog
      v-if="rules"
      :game="game"
      :info="info" />

    <g-game-verdict-dialog
      v-if="showVerdict"
      :reset="reset"
      :game-once="game"
      :theme="theme" />

    <g-game-pass-dialog
      v-if="passConfirm"
      :theme="theme"
      :game="game"
      :session-other="sessionOther" />
  </div>
</template>

<script>
import {
  Games,
  TimedProxy,
  Info,
  initActions,
  initHighlight,
  other,
  selectAction,
  undoAction,
  undoFor
} from '../../plugins/lib'
import { isHuman } from '../services/players'
import { Bus } from '../services/bus'
import { PlayerWorker } from '../worker/ai'
import { theme } from '../services/theme'
import { Shared } from '../services/shared'
import { gameData } from '../services/utils'

import { latency, chordSound, kick1Sound, kick2Sound } from '../services/sound'
import { kickVibration } from '../services/vibration'
import gameResize from '../mixins/game-resize'
import gameSession from '../mixins/game-session'
import playerSwitch from '../mixins/player-switch'

const LATENCY = 2
let JOB_ID = 0

export default {
  components: {
    GBoard: () => import('./Board'),
    GPlayerDivider: () => import('./PlayerDivider'),
    GGameVerdictDialog: () => import('./GameVerdictDialog'),
    GGameInfoDialog: () => import('./GameInfoDialog'),
    GGamePassDialog: () => import('./GamePassDialog')
  },
  mixins: [gameResize, gameSession, playerSwitch],
  data () {
    return {
      game: null,
      info: null,
      frame: null,
      margin: 20,
      fab: false,
      working: false,
      robotPlayer: {},
      theme: null,
      showVerdict: false,
      rules: false,
      showRules: true,
      passConfirm: false
    }
  },
  watch: {
    'game.player': function () {
      this.robot()
    },
    'game.winner': function (value) {
      if (value) {
        this.showVerdict = true
        this.update()
      }
    },
    'game.moves.length': function (value) {
      if (value && this.sessionHotSeat && !this.game.moves[value - 1]) {
        this.passConfirm = true
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
    },
    '$route.params.id': function (value) {
      this.initGame()
      this.initRobots()
      this.onResize()
      this.update()
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
      this.game.limit = this.sessionHotSeat ? this.$store.state.timer : 0
    },
    initGame () {
      if (!this.sessionHuman[1] && this.sessionHuman[2]) {
        this.playerSwitch()
      }

      this.info = Info.game(this.$route.params.id)
      const g = this.$route.params.id + 'Game'
      const game = new Games[g]()
      initHighlight(game)
      const timed = new TimedProxy(game)
      this.game = Shared.game = timed
      this.theme = theme(Games[g])
      this.initTimer()

      if (this.showRules && !this.sessionRobotMatch && this.$store.state.rules) {
        this.showRules = false

        setTimeout(() => {
          this.rulesText = gameData(game.constructor, 'rules')
          this.rules = !!this.rulesText
        }, 200)
      }
    },
    initRobot (robot) {
      return isHuman(robot)
        ? false
        : new PlayerWorker(robot, this.$route.params.id)
    },
    destroyRobots () {
      if (this.robotPlayer[1]) {
        this.robotPlayer[1].terminate()
        this.working = false
      }

      if (this.robotPlayer[2]) {
        this.robotPlayer[2].terminate()
        this.working = false
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
        if (this.game.winner) {
          chordSound(this.game.winner)
        } else if (this.game.player === 1) {
          kick1Sound()
        } else {
          kick2Sound()
        }
      }

      if (this.$store.state.vibration && !this.sessionRobotMatch) {
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
        JOB_ID++
        this.runRobot(player, JOB_ID)
      }
    },
    runRobot (player, jobId) {
      const start = Date.now()

      player.select(this.game).then(move => {
        setTimeout(() => {
          if (jobId !== JOB_ID) {
            return
          }

          this.working = false
          undoAction(this.game)
          this.game.move(move.move)
          this.kickSound()
          this.update()
          this.robot()
        }, Math.max(0, 400 - Date.now() + start))
      })
    },
    move (tile) {
      this.rules = false

      if (this.game.winner || this.working) {
        return
      }

      const action = selectAction(this.game, tile)

      if (action === false) {
        return
      }

      if (action) {
        undoAction(this.game)
        this.game.move(action)
        this.kickSound()
        this.update()
      } else {
        this.kickSound()
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
      const target = this.sessionHotSeat ? other(this.game.player) : this.game.player
      undoFor(this.game, target)
      this.update()
    },
    reset () {
      this.fab = false
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

.mt-1-5 {
  margin-top: 5px;
}
</style>
