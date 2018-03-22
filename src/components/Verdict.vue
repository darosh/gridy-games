<template>
  <v-dialog
    :value="value"
    max-width="288px">
    <v-card ref="dlg">
      <v-card-title>
        <span class="title pa-2">{{ verdict }}</span>
      </v-card-title>
      <div
        :class="{[theme]: true}"
        class="text-xs-center mb-2">
        <div
          :class="{['player-' + game.winner]: true, [verdictIcon === -1 ? 'shift' : 'shake']: true}"
          class="d-inline-block relative player"
          style="height: 120px; width: 120px">
          <svg
            height="120"
            width="120"
            class="d-block absolute">
            <circle
              :class="'symbol-' + (game.winner || -1)"
              cx="60"
              cy="60"
              r="60" />
          </svg>
          <g-player-divider
            v-if="verdictIcon === -1"
            value="0"
            class="absolute player-divider d-block divider-large" />
          <v-icon
            v-else-if="verdictIcon === 1"
            class="absolute player-status icon-large">mood</v-icon>
          <v-icon
            v-else-if="verdictIcon === 0"
            class="absolute player-status icon-large">mood_bad</v-icon>
        </div>
      </div>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          flat
          style="min-width: 0"
          @click="$emit('change', false)">Cancel</v-btn>
        <v-btn
          flat
          style="min-width: 0"
          @click="reset()">Restart</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue'
import gameSession from '../mixins/game-session'
import gameVerdict from '../mixins/game-verdict'

export default {
  components: {
    VDialog: () => import('vuetify/es5/components/VDialog'),
    GPlayerDivider: () => import('./PlayerDivider')
  },
  mixins: [gameSession, gameVerdict],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    reset: {
      type: Function,
      required: true
    },
    game: {
      type: Object,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  watch: {
    value () {
      if (this.value) {
        Vue.nextTick(() => {
          this.$refs.dlg.$el.parentElement.parentElement.id = 'top-dialog'
        })
      }
    }
  }
}
</script>

<style scoped>
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

.shake {
  animation: shake-animation alternate 0.6s ease-in-out infinite;
}

@keyframes shake-animation {
  0% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(15deg);
  }
}

.shift {
  animation: shift-animation alternate 0.6s ease-in-out infinite;
}

@keyframes shift-animation {
  0% {
    transform: translate(-16px);
  }
  100% {
    transform: translate(16px);
  }
}
</style>
