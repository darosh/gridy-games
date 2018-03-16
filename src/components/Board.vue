<template>
  <div
    :style="{width: size[vertical ? 1 : 0] + 'px', height: size[vertical ? 0 : 1] + 'px'}"
    :class="{vertical: vertical, 'read-only': !interactive}">
    <svg
      :width="size[0]"
      :height="size[1]"
      :class="theme"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      class="d-block">
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
            :class="{['angle-' + Math.abs(game.grid.orientation * game.grid.angle)] : true, clickable: t.highlighted && !waiting, ['value-' + (t.data || 0)]: true, possible: t.highlighted, odd: t.odd, animate: interactive, waiting: t.highlighted && waiting}"
            :transform="'rotate(' + (game.grid.orientation * game.grid.angle) + ')'"
            class="tile"
            v-on="interactive ? {click: () => move(t)} : null" />
          <polygon
            v-else
            :points="game.grid.tileTypes === 2 ? typedVertices(t) : (vertices || irregularVertices(t))"
            :class="{['angle-' + Math.abs(game.grid.orientation * game.grid.angle)] : true, clickable: t.highlighted && !waiting, ['value-' + (t.data || 0)]: true, possible: t.highlighted, odd: t.odd, animate: interactive, waiting: t.highlighted && waiting}"
            :transform="'rotate(' + (game.grid.orientation * game.grid.angle) + ')'"
            class="tile"
            v-on="interactive ? {click: () => move(t)} : null" />
          <text
            v-if="coords"
            :font-size="game.grid.scale * 0.4"
            :dy="game.grid.scale * 0.04"
            :transform="vertical ? 'rotate(-90)' : null"
            alignment-baseline="middle"
            text-anchor="middle">
            {{ game.moveToString(t) }} </text>
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
                :r="game.grid.radius * game.grid.scale * 0.85 - round * 2"
                :class="{animate: interactive, clickable: t.highlighted && !waiting, ['token-' + t.data]: true}"
                cx="0"
                cy="0"
                v-on="interactive ? {click: () => move(t)} : null" />
            </transition>
          </g>
        </g>
        <g v-else>
          <circle
            v-for="(t, k) in stones"
            :key="'s' + k"
            :style="{transform: 'translate(' + center(t.tile, 'px') + ')'}"
            :r="game.grid.radius * game.grid.scale * 0.85 - round * 2"
            :class="{animate: interactive, clickable: t.tile.highlighted && !waiting, ['token-' + t.data]: true}"
            class="stone"
            cx="0"
            cy="0"
            v-on="interactive ? {click: () => move(t.tile)} : null" />
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
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    game: {
      type: Object,
      required: true
    },
    round: {
      type: Boolean,
      default: true
    },
    interactive: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    waiting: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    coords: {
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
  mounted () {
    this.$emit('change', true)
    // console.log(this.$el)
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
.stone.animate {
  transition: all 0.2s ease-in-out;
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

.read-only {
  pointer-events: none;
}
</style>
