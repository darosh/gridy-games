<template>
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
          <path
            v-if="game.grid.irregular"
            :d="path(t)"
            :class="{['angle-' + Math.abs(game.grid.orientation * game.grid.angle)] : true, clickable: t.highlighted && !robotTurn, ['value-' + (t.data || 0)]: true, possible: t.highlighted, odd: t.odd, animate: true, waiting: t.highlighted && robotTurn}"
            :transform="'rotate(' + (game.grid.orientation * game.grid.angle) + ')'"
            class="tile"
            v-on="interactive ? {click: () => move(t)} : null" />
          <polygon
            v-else
            :points="vertices || irregularVertices(t)"
            :class="{['angle-' + Math.abs(game.grid.orientation * game.grid.angle)] : true, clickable: t.highlighted && !robotTurn, ['value-' + (t.data || 0)]: true, possible: t.highlighted, odd: t.odd, animate: true, waiting: t.highlighted && robotTurn}"
            :transform="'rotate(' + (game.grid.orientation * game.grid.angle) + ')'"
            class="tile"
            v-on="interactive ? {click: () => move(t)} : null" />
        </g>
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
                v-on="interactive ? {click: () => move(t)} : null" />
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
            v-on="interactive ? {click: () => move(t.tile)} : null" />
            <!-- </transition> -->
        </g>
        <g-poly-line
          v-if="winning"
          :tiles="winning"
          :center="center"
          :size="game.grid.scale"
          :delay="200" />
      </g>
    </svg>
  </div>
</template>

<script>
import game from '../mixins/game'
import { theme } from '../style/theme'

export default {
  components: {
    GPolyLine: () => import('./PolyLine')
  },
  mixins: [game],
  props: {
    game: {
      type: Object,
      required: true
    },
    interactive: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    robotTurn: {
      type: Boolean,
      default: false
    },
    frame: { type: Array, required: true },
    margin: { type: Number, default: 0 },
    move: { type: Function, default: null }
  },
  data () {
    return {
      winning: null,
      lines: null,
      rulers: null,
      stones: null
    }
  },
  computed: {
    theme: function () {
      return theme(this.game.constructor)
    },
    isMove: function () {
      return this.game.constructor.move
    }
  },
  watch: {
    game: {
      immediate: true,
      handler: function () {
        this.lines = this.game.links ? this.game.links() : []
        this.rulers = this.game.rulers ? this.game.rulers() : []
        this.initStones()
      }
    },
    'game.moves.length': function () {
      this.updateStones()
    },
    'game.winner': function (value) {
      this.winning = value && this.game.winning ? this.game.winning() : null
    }
  },
  methods: {
    center (tile, units) {
      if (units) {
        return this.game.grid.center(tile).value.map(t => `${t}${units}`)
      }

      return this.game.grid.center(tile)
    },
    initStones () {
      this.stones = []

      if (this.isMove) {
        for (const tile of this.game.grid.tiles) {
          if (tile.data) {
            this.stones.push({ tile, data: tile.data })
          }
        }
      }
    },
    updateStones () {
      if (this.isMove && this.game.moves.length) {
        const action = this.game.moves[this.game.moves.length - 1]
        this.stones.find(s => s.tile === action[0]).tile = action[1]
      }
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
