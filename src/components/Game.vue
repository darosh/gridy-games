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

    <g-verdict
      v-model="showVerdict"
      :reset="reset"
      :game="game"
      :theme="theme" />

    <v-dialog
      :value="rules"
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
            @click="rules = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      :value="passConfirm"
      max-width="280px"
      persistent>
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
            @click="game.start(); passConfirm = false">Pass</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
  update,
  undoFor
} from '../../plugins/lib'
import { isHuman } from '../services/players'
import { Bus } from '../services/bus'
import { PlayerWorker } from '../worker/ai'
import { theme } from '../style/theme'
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
    GVerdict: () => import('./Verdict'),
    GInfo: () => import('./Info'),
    VDialog: () => import('vuetify/es5/components/VDialog')
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
      rulesText: true,
      rulesInfo: false,
      passConfirm: false
    }
  },
  computed: {
    sample () {
      const game = new this.game.constructor()
      update(game, this.game.constructor.sample)

      return game
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
      this.showVerdict = false
      const target = this.sessionHotSeat ? other(this.game.player) : this.game.player
      undoFor(this.game, target)
      this.update()
    },
    reset () {
      this.fab = false
      this.showVerdict = false
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
