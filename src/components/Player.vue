<template>
  <v-card
    :class="classes"
    class="player animate">
    <v-layout
      :reverse="value === 2"
      row
      class="py-2 px-1"
      align-center>
      <svg
        height="24"
        width="24"
        class="d-block mx-1">
        <circle
          :class="'symbol-' + value"
          cx="12"
          cy="12"
          r="8" />
      </svg>
      <v-flex
        text-xs-center
        style="position: relative: top: 2px">
        <transition
          name="count-transition"
          mode="out-in">
          <div
            v-if="game.player === value && game.counter > 0"
            :key="game.counter"
            class="title">{{ game.counter }}</div>
          <v-icon
            v-else-if="game.player === value && game.counter === 0"
            :key="game.counter">timer_off</v-icon>
          <v-icon
            key="a"
            v-else-if="switcher"
            :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'">swap_horiz</v-icon>
          <v-icon
            key="b"
            v-else-if="!game.winner && (game.player === value) && waiting"
            :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'"
            class="rotate-animation">hourglass_empty</v-icon>
          <v-icon
            key="c"
            v-else-if="!game.winner && (game.player === value)"
            :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'">play_arrow</v-icon>
          <v-icon
            key="d"
            v-else-if="game.winner === value"
            :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'">mood</v-icon>
          <v-icon
            key="e"
            v-else-if="game.winner === -1"
            :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'">sentiment_very_dissatisfied</v-icon>
          <div
            key="f"
            v-else/>
        </transition>
      </v-flex>
      <span
        v-if="game.score"
        class="px-2 body-2">{{ game.score[value] }}</span>
      <span
        v-else
        class="mx-3" />
    </v-layout>
    <div class="timer-wrap">
      <div
        :style="{width: (timer >= 0) ? timer + '%' : '100%', transition: `background-color 0.2s ease-in-out, height 0.2s ease-in-out, margin 0.2s ease-in-out, width ${transition}ms linear`}"
        class="timer" />
    </div>
  </v-card>
</template>

<script>
import { tickSound, failSound } from '../services/sound'

export default {
  props: {
    value: { type: Number, default: 1 },
    game: { type: Object, default: null },
    waiting: { type: Boolean, default: false },
    switcher: { type: Boolean, default: false }
  },
  data () {
    return {
      timer: -1,
      transition: 0
    }
  },
  computed: {
    classes () {
      return {
        ['player-' + this.value]: true,
        waiting:
          this.waiting && !this.game.winner && this.game.player === this.value,
        'elevation-2 active':
          !this.game.winner && this.game.player === this.value,
        'elevation-1': !(!this.game.winner && this.game.player === this.value),
        win: this.game.winner === this.value,
        draw: this.game.winner === -1
      }
    }
  },
  watch: {
    'game.player': function () {
      this.updateTimer()
    },
    'game.pending': function () {
      this.updateTimer()
    },
    'game.counterSignal': function (value) {
      if (!this.$store.state.sound) {
        return
      }

      if (value > 0) {
        tickSound()
      } else if (value === 0) {
        failSound()
      }
    }
  },
  methods: {
    updateTimer () {
      if (this.game.pending && this.value === this.game.player) {
        this.timer = 0
        this.transition = this.game.limit
      } else {
        this.timer = -1
        this.transition = 0
      }
    }
  }
}
</script>

<style scoped>
.capital {
  text-transform: uppercase;
}

.animate {
  transition: all 0.2s ease-in-out;
}

.title,
body-2 {
  vertical-align: middle;
}

.rotate-animation {
  animation: rotate 0.5s ease-in-out 0.4s infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

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
</style>
