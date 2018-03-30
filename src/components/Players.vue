<template>
  <div
    :class="theme"
    class="relative text-xs-center"
    style="width: 64px; height: 48px">
    <g-player-divider
      :value="game.winner === -1 ? '0' : '-1'"
      class="d-inline-block"
      style="margin-top: 19px" />
    <div
      :style="{transition: starting ? 'none' : null, top: 0, transform: `translate(${position}px,0)`}"
      :class="'player-' + value"
      class="absolute player">
      <div>
        <svg
          height="64"
          width="64"
          class="d-block">
          <circle
            :style="{transition: starting ? 'none' : null}"
            :class="'symbol-' + value"
            cx="31"
            cy="31"
            r="16.5" />
          <circle
            :style="{'stroke-dashoffset': timer >= 0 ? timer : OFFSET, transition: `stroke-dashoffset ${timerTransition}ms linear`}"
            class="player-timer"
            cx="31"
            cy="31"
            r="22.5"
            transform="rotate(-90 31 31)" />
        </svg>
        <div class="absolute info-position">
          <transition
            name="count-transition"
            mode="out-in">
            <div
              v-if="game.player === value && game.counter > 0"
              :key="game.counter"
              style="width: 24px; margin-top: 2px; text-align: center"
              class="title counter">{{ game.counter }}</div>
            <v-icon
              v-else-if="game.player === value && game.counter === 0"
              :key="game.counter"
              class="player-status">timer_off</v-icon>
            <div
              v-else-if="sessionWaiting"
              key="b"
              style="transform: none">
              <div>
                <v-icon class="player-status rotate-animation">hourglass_empty</v-icon>
              </div>
            </div>
            <v-icon
              v-else-if="game.winner > 0 && game.winner === value"
              key="d"
              class="player-status">mood</v-icon>
            <div
              v-else-if="game.winner === -1"
              key="e"
              class="player-draw-status"/>
            <v-icon
              v-else
              key="c"
              class="player-status">play_arrow</v-icon>
          </transition>
        </div>
      </div>
    </div>
    <div
      v-show="sessionCanSwitch || game.expired"
      :style="{top: 0, transform: `translate3d(${-position}px,0,0)`}"
      :class="{['player-' + other]: true, clickable: sessionCanSwitch}"
      class="absolute player"
      @click="sessionCanSwitch && playerSwitch()">
      <div>
        <svg
          :class="{[theme]: true}"
          height="64"
          width="64"
          class="d-block">
          <circle
            :class="'symbol-' + other"
            cx="31"
            cy="31"
            r="16.5" />
        </svg>
        <div class="absolute info-position">
          <v-icon
            v-if="sessionCanSwitch"
            class="player-status">swap_horiz</v-icon>
          <v-icon v-else-if="game.expired">timer_off</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Shared } from '../services/shared'
import { theme } from '../services/theme'
import playerSwitch from '../mixins/player-switch'
import playerTimer from '../mixins/player-timer'
import gameSession from '../mixins/game-session'

const SIDE = 42
const OFFSET = 2 * Math.PI * 22.5

export default {
  components: {
    GPlayerDivider: () => import('./PlayerDivider')
  },
  mixins: [gameSession, playerSwitch, playerTimer],
  data () {
    return {
      Shared,
      OFFSET,
      starting: true
    }
  },
  computed: {
    game () {
      return Shared.game
    },
    value () {
      return Shared.game.winner || Shared.game.player
    },
    other () {
      return Shared.game.expired ? -1 : 3 - this.value
    },
    theme () {
      return theme(Shared.game.constructor)
    },
    position () {
      if (Shared.game.moves.length === 0) {
        return -SIDE
      } else {
        if (this.value === 1) {
          return -SIDE
        } else if (this.value === 2) {
          return SIDE
        } else {
          return 0
        }
      }
    }
  },
  watch: {
    'game.moves.length': {
      immediate: true,
      handler (value) {
        if (!value) {
          this.starting = true
          Vue.nextTick(() => {
            requestAnimationFrame(() => {
              this.starting = false
            })
          })
        } else {
          this.starting = false
        }
      }
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.player {
  transition: transform 0.2s ease-out;
}
.player circle {
  transition: fill 0.2s linear, stroke 0.2s linear;
}

/* .player * {
  transition: none;
} */

.player-timer {
  stroke-dasharray: 141.371;
  stroke-dashoffset: 141.371;
  stroke-linecap: round;
  stroke-width: 3;
  stroke: #fff;
  fill: none;
}

.clickable:hover {
  cursor: pointer;
}

/* .player .icon {
  pointer-events: none;
  touch-action: none;
} */

.count-transition-leave,
.count-transition-leave-active,
.count-transition-leave-to {
  display: none;
  animation: none;
  transition: none;
}
.count-transition-enter {
  transform: scale(0.5);
  opacity: 0.5;
}
.count-transition-enter-active {
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.count-transition-enter-to {
  transform: scale(1);
  opacity: 1;
}

.rotate-animation {
  animation: rotate 2s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.theme--light .player-timer {
  stroke: #848484;
}

.theme--dark .player-timer {
  stroke: #fff;
}

.info-position {
  top: 19px;
  left: 19px;
}
</style>
