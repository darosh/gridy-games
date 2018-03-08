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
            <player-card
              v-if="game"
              :value="1"
              :game="game"
              :waiting="robotTurn"
              :timer="timerValue"
              :counter="counter"
              :transition="transition"
              :winner="winner" />
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
            <player-card
              v-if="game"
              :value="2"
              :game="game"
              :waiting="robotTurn"
              :switcher="canSwitch"
              :timer="timerValue"
              :counter="counter"
              :transition="transition"
              :class="{clickable: canSwitch}"
              :winner="winner"
              @click.native="canSwitch && switchPlayer()" />
          </v-flex>
        </v-layout>
        <div
          :style="{width: size[vertical ? 1 : 0] + 'px', height: size[vertical ? 0 : 1] + 'px'}"
          :class="{vertical: vertical}"
          class="d-inline-block">
          <svg
            :width="size[0]"
            :height="size[1]"
            :class="theme"
            class="d-block">
            <defs>
              <pattern
                id="stripes"
                patternTransform="translate(0,0) scale(3,3), rotate(-45)"
                height="1"
                width="3"
                patternUnits="userSpaceOnUse">
                <rect
                  height="2"
                  width="1"
                  y="-0.5"
                  x="0" />
              </pattern>
              <pattern
                id="stripes-30"
                patternTransform="translate(0,0) scale(3,3), rotate(-15)"
                height="1"
                width="3"
                patternUnits="userSpaceOnUse">
                <rect
                  height="2"
                  width="1"
                  y="-0.5"
                  x="0" />
              </pattern>
            </defs>
            <rect
              :x="margin/2 + 0.5"
              :y="margin/2 + 0.5"
              :width="size[0] - margin"
              :height="size[1] - margin" />
            <g :transform="'translate('+ translate +')'">
              <line
                v-for="(l, k) in lines"
                :key="k"
                :x1="center(l[0]).x"
                :y1="center(l[0]).y"
                :x2="center(l[1]).x"
                :y2="center(l[1]).y"
                :class="l[2] ? 'line-' + l[2] : ''" />
              <g
                v-for="t in game.grid.tiles"
                :key="t.key"
                :transform="'translate(' + center(t) + ')'">
                <polygon
                  :points="vertices"
                  :class="{['angle-' + Math.abs(game.grid.orientation * game.grid.angle)] : true, clickable: t.highlighted && !robotTurn, ['value-' + (t.data || 0)]: true, possible: t.highlighted, odd: t.odd, animate: true, waiting: t.highlighted && robotTurn}"
                  :transform="'rotate(' + (game.grid.orientation * game.grid.angle) + ')'"
                  @click="move(t)" /> </g>
              <line
                v-for="(l, k) in rulers"
                :key="'r' + k"
                :x1="center(l[0]).x"
                :y1="center(l[0]).y"
                :x2="center(l[1]).x"
                :y2="center(l[1]).y"
                :class="l[2] ? 'line-' + l[2] : ''" />

              <g v-if="!isMove">
                <g
                  v-for="t in game.grid.tiles"
                  :key="'c' + t.key"
                  :transform="'translate(' + center(t) + ')'">
                  <transition name="scale-transition">
                    <circle
                      v-if="t.data"
                      :r="game.grid.radius * game.grid.scale * 0.85 - 2"
                      :class="{clickable: t.highlighted && !robotTurn, ['token-' + t.data]: true}"
                      cx="0"
                      cy="0"
                      class="animate"
                      @click="move(t)" />
                  </transition>
                </g>
              </g>
              <g
                v-for="(t, k) in stones"
                v-else
                :key="'s' + k"
                :style="{transform: 'translate(' + center(t.tile, 'px') + ')'}"
                class="stone">
                <!-- <transition name="scale-transition"> -->
                <circle
                  :r="game.grid.radius * game.grid.scale * 0.85 - 2"
                  :class="{clickable: t.tile.highlighted && !robotTurn, ['token-' + t.data]: true}"
                  cx="0"
                  cy="0"
                  class="animate"
                  @click="move(t.tile)" />
                  <!-- </transition> -->
              </g>
              <!-- <polyline v-if="winning" :points="line(winning)" /> -->
              <g-poly-line
                v-if="winning"
                :tiles="winning"
                :center="center"
                :size="game.grid.scale"
                :delay="400" />
            </g>
          </svg>
        </div>
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
        <span v-if="winner">{{ verdict }}</span>
      </v-flex>
      <v-btn
        flat
        color="light-blue"
        @click.native="snackbar = false; reset()">Restart</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import {
  Games,
  initActions,
  initHighlight,
  selectAction,
  undoAction
} from '../lib'
import game from '../mixins/game'
import PlayerCard from './Player'
import { isHuman } from '../services/players'
import { Bus } from '../services/bus'
import { PlayerWorker } from '../worker'
import { theme } from '../style/theme'
import { Shared } from '../services/shared'
import {
  latency,
  kick1Sound,
  kick2Sound,
  tickSound,
  failSound
} from '../services/sound'
import { kickVibration } from '../services/vibration'
import GPolyLine from './PolyLine'

const LATENCY = 2

export default {
  components: {
    PlayerCard,
    GPolyLine
  },
  mixins: [game],
  data () {
    return {
      name: this.$route.params.id,
      isMove: Games[this.$route.params.id + 'Game'].move,
      stones: [],
      lines: [],
      winning: null,
      possibleCount: 0,
      game: null,
      frame: null,
      margin: 20,
      fab: false,
      working: false,
      robotPlayer: {},
      vertical: window.innerWidth < window.innerHeight,
      theme: null,
      snackbar: false,
      counter: -1,
      timerValue: -1,
      transition: 0,
      timeoutWinner: 0
    }
  },
  computed: {
    ...mapGetters(['player']),
    robotTurn () {
      return !isHuman(this.$store.state.player[this.game.player])
    },
    canSwitch () {
      if (!this.game.moves.length) {
        const h1 = isHuman(this.$store.state.player[1])
        const h2 = isHuman(this.$store.state.player[2])

        return h1 && !h2
      }
    },
    hotSeat () {
      const h1 = isHuman(this.$store.state.player[1])
      const h2 = isHuman(this.$store.state.player[2])

      return h1 && h2
    },
    winner () {
      return this.timeoutWinner || (this.game && this.game.winner)
    },
    verdict () {
      const h1 = isHuman(this.$store.state.player[1])
      const h2 = isHuman(this.$store.state.player[2])

      if (
        (h1 && !h2 && this.game.winner === 1) ||
        (!h1 && h2 && this.game.winner === 2)
      ) {
        return 'You won!'
      } else if (
        (h1 && !h2 && this.game.winner === 2) ||
        (!h1 && h2 && this.game.winner === 1)
      ) {
        return 'You lost'
      } else if (h1 !== h2 && this.game.winner === -1) {
        return `It's draw`
      } else if (h1 && h2 && this.timeoutWinner) {
        return 'Time out'
      } else {
        return 'Game over!'
      }
    }
  },
  watch: {
    'game.player': function () {
      this.robot()
    },
    'game.moves.length': function () {
      this.startTimer()
    },
    winner: function (value) {
      if (value) {
        this.transition = 0

        setTimeout(() => {
          this.timerValue = -1
        }, 200)

        if (!this.timeoutWinner) {
          this.counter = -1
        }

        this.snackbar = true
      }
    },
    '$store.state.player': {
      handler: function () {
        this.initRobots()
        this.robot()
      },
      deep: true
    }
  },
  mounted () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  created () {
    this.initGame()
    this.initRobots()
    this.onResize()
    this.frameUpdate()
    this.update()
    Bus.$on('game', this.update)
  },
  destroyed () {
    Bus.$off('game', this.update)
    this.destroyRobots()

    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    ...mapMutations(['setPlayer']),
    edited () {
      this.dialog = !this.dialog
    },
    startTimer () {
      if (this.timer) {
        clearInterval(this.timer)
      }

      if (
        this.game.winner ||
        !this.hotSeat ||
        !this.$store.state.timer ||
        !this.game.moves.length
      ) {
        return
      }

      let counter = this.$store.state.timer > 5000 ? 5 : 3
      this.counter = -1
      this.timerValue = 100
      this.transition = 0
      this.timeoutWinner = 0

      requestAnimationFrame(() => {
        this.transition = this.$store.state.timer
        this.timerValue = 0
      })

      this.timer = setInterval(() => {
        clearInterval(this.timer)
        // this.counter = counter
        this.timer = setInterval(() => {
          counter--
          this.counter = counter

          if (!counter) {
            if (this.$store.state.sound) {
              failSound()
            }

            if (this.$store.state.vibration) {
              kickVibration(
                900,
                this.$store.state.sound ? LATENCY * latency.latency : 0
              )
            }

            clearInterval(this.timer)
            this.transition = 0
            this.timerValue = 0
            this.timeoutWinner = 3 - this.game.player
            this.update()
          } else {
            if (this.$store.state.sound) {
              tickSound()
            }

            if (this.$store.state.vibration) {
              kickVibration(
                300,
                this.$store.state.sound ? LATENCY * latency.latency : 0
              )
            }
          }
        }, 1000)
      }, this.$store.state.timer - counter * 1000)
    },
    initGame () {
      if (
        !isHuman(this.$store.state.player[1]) &&
        isHuman(this.$store.state.player[2])
      ) {
        this.switchPlayer()
      }

      this.counter = -1
      const g = this.$route.params.id + 'Game'
      const game = new Games[g]()
      initHighlight(game)
      this.game = Shared.game = game
      this.lines = this.game.links ? this.game.links() : []
      this.rulers = this.game.rulers ? this.game.rulers() : []
      this.theme = theme(Games[g])

      if (this.isMove) {
        for (const tile of this.game.grid.tiles) {
          if (tile.data) {
            this.stones.push({ tile, data: tile.data })
          }
        }
      }
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

      if (this.$store.state.vibration) {
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
    onResize () {
      let bounds = this.game.grid.bounds()

      if (this.game.landscape) {
        this.vertical = false
      } else {
        const ratio = (bounds.maxX - bounds.minX) / (bounds.maxY - bounds.minY)
        this.vertical = ratio > 1 && window.innerWidth < window.innerHeight
      }

      if (this.vertical) {
        this.frame = [window.innerHeight - 64 * 2 - 8, window.innerWidth - 40]
      } else {
        if (window.innerHeight < 800) {
          this.frame = [
            window.innerWidth - 40,
            window.innerHeight - 64 * 2 - 16
          ]
        } else {
          this.frame = [
            window.innerWidth - 64,
            window.innerHeight - 64 * 4 + 32
          ]
        }
      }

      this.frame[0] = Math.max(180, this.frame[0])
      this.frame[1] = Math.max(180, this.frame[1])
    },
    center (tile, units) {
      if (units) {
        return this.game.grid.center(tile).value.map(t => `${t}${units}`)
      }

      return this.game.grid.center(tile)
    },
    move (tile) {
      if (this.winner) {
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

      if (this.hotSeat && this.timeoutWinner) {
        return
      }

      const ps = this.game.possible()
      this.possibleCount = ps.length
      initActions(this.game, ps)

      this.winning =
        this.game.winner && !this.timeoutWinner && this.game.winning
          ? this.game.winning()
          : null

      if (this.isMove && this.game.moves.length) {
        const action = this.game.moves[this.game.moves.length - 1]
        this.stones.find(s => s.tile === action[0]).tile = action[1]
      }
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
      this.counter = -1
      this.timerValue = -1
      this.timeoutWinner = 0
      this.stones = []

      let startTimer
      if (!this.game.moves.length) {
        startTimer = true
      }

      this.initGame()
      this.onResize()
      this.frameUpdate()
      this.initRobots()
      this.update()

      if (startTimer) {
        this.startTimer()
      }

      this.robot()
    },
    line (tiles) {
      return tiles.map(t => this.center(t).toString()).join(',')
    }
  }
}
</script>

<style scoped>
polygon.animate,
circle.animate {
  transition: fill 0.2s ease-in-out;
}
.vertical {
  transform-origin: 100% 0%;
  transform: rotate(90deg) translateX(100%);
}

circle.scale-transition-enter {
  transform: scale(0);
}
circle.scale-transition-enter-active {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
circle.scale-transition-enter-to {
  transform: scale(1);
}

.clickable:hover {
  cursor: pointer;
}
</style>
