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
        <v-icon v-if="game.player === value && counter === 0">timer_off</v-icon>
        <span
          v-else-if="game.player === value && counter > 0"
          class="title">{{ counter }}</span>
        <v-icon
          v-else-if="switcher"
          :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'">swap_horiz</v-icon>
        <v-icon
          v-else-if="!winner && game.player === value && waiting"
          :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'"
          class="rotate-animation">hourglass_empty</v-icon>
        <v-icon
          v-else-if="!winner && game.player === value"
          :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'">play_arrow</v-icon>
        <v-icon
          v-else-if="winner === value"
          :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'">mood</v-icon>
        <v-icon
          v-else-if="winner === -1"
          :color="$store.state.dark ? 'grey lighten-3' : 'grey darken-3'">sentiment_very_dissatisfied</v-icon>
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
export default {
  props: {
    value: { type: Number, default: 1 },
    game: { type: Object, default: null },
    waiting: { type: Boolean, default: false },
    switcher: { type: Boolean, default: false },
    transition: { type: Number, default: 0 },
    timer: { type: Number, default: -1 },
    counter: { type: Number, default: -1 },
    winner: { type: Number, default: 0 }
  },
  computed: {
    classes () {
      return {
        ['player-' + this.value]: true,
        waiting:
          this.waiting && !this.winner && this.game.player === this.value,
        'elevation-2 active': !this.winner && this.game.player === this.value,
        'elevation-1': !(!this.winner && this.game.player === this.value),
        win: this.winner === this.value,
        draw: this.winner === -1
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
</style>
