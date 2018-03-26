<template>
  <div
    :style="{width: size[vertical ? 1 : 0] + 'px', height: size[vertical ? 0 : 1] + 'px', 'margin-top': centered && (shift > 0) ? shift + 'px' : ''}"
    :class="{vertical: vertical, 'read-only': !interactive}">
    <svg
      :width="size[0]"
      :height="size[1]"
      :class="theme"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      class="d-block">
      <rect
        :x="(margin/2).toFixed(3)"
        :y="((margin + size[1] - rect[1]) / 2 + 0.5).toFixed(3)"
        :width="(rect[0] - margin).toFixed(3)"
        :height="(rect[1] - margin).toFixed(3)" />
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
        </g>
        <line
          v-for="(l, k) in rulers"
          :key="'r' + k"
          :x1="center(l[0]).x"
          :y1="center(l[0]).y"
          :x2="center(l[1]).x"
          :y2="center(l[1]).y"
          :class="l[2] ? 'line-' + l[2] : ''" />
        <g
          v-for="t in game.grid.tiles"
          :key="'text' + t.key"
          :transform="'translate(' + center(t) + ')'">
          <text
            v-if="coords"
            :font-size="game.grid.scale * 0.4"
            :dy="game.grid.scale * 0.04"
            :transform="vertical ? 'rotate(-90)' : null"
            alignment-baseline="middle"
            text-anchor="middle">
            {{ game.moveToString(t) }} </text>
        </g>
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
            v-for="t in stones"
            :key="'s' + t.id"
            :style="{transform: 'translate(' + center(t.tile, 'px') + ')'}"
            :r="game.grid.radius * game.grid.scale * 0.85 - round * 2"
            :class="{animate: interactive && !resizing, clickable: t.tile.highlighted && !waiting, ['token-' + t.data]: true}"
            class="stone"
            cx="0"
            cy="0"
            v-on="interactive ? {click: () => move(t.tile)} : null" />
        </g>
        <g-poly-line
          v-if="winning"
          :class="'winner-' + game.winner"
          :style="{'stroke-width': Math.round((game.grid.radius * game.grid.scale * 0.85 - round * 2) * .5)}"
          :tiles="winning"
          :center="center"
          :size="game.grid.scale"
          :delay="200" />
      </g>
      <rect
        :x="(margin/2).toFixed(3)"
        :y="((margin + size[1] - rect[1]) / 2 + 0.5).toFixed(3)"
        :width="(rect[0] - margin).toFixed(3)"
        :height="(rect[1] - margin).toFixed(3)"
        style="fill: none"/>
    </svg>
  </div>
</template>

<script>
import boardSize from '../mixins/board-size'
import { theme } from '../style/theme'

export default {
  components: {
    GPolyLine: () => import('./PolyLine')
  },
  mixins: [boardSize],
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
    'game.winner': {immediate: true,
      handler (value) {
        this.winning = value && this.game.winning ? this.game.winning() : null
      }
    }
  },
  mounted () {
    this.$emit('change', true)
  },
  methods: {
    center (tile, units) {
      if (units) {
        return this.game.grid.center(tile).value.map(t => `${t.toFixed(3)}${units}`)
      }

      return this.game.grid.center(tile)
    },
    initStones () {
      this.stones = []

      if (this.isMove) {
        for (const tile of this.game.grid.tiles) {
          if (tile.data) {
            this.stones.push({ tile, data: tile.data, id: this.stones.length })
          }
        }
      }
    },
    updateStones () {
      if (this.isMove && this.game.moves.length) {
        const action = this.game.moves[this.game.moves.length - 1]

        const first = action[0];
        let last = action[action.length - 1]
        last = Array.isArray(last) ? last[0] : last

        this.stones.find(s => s.tile === first).tile = last

        for(let i = 0; i < action.length; i++) {
          if(Array.isArray(action[i])) {
            if(action[i][1]) {
              const index = this.stones.findIndex(s => s.tile === action[i][1])
              this.stones.splice(index, 1)
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
polygon.animate,
circle.animate {
  transition: fill 0.2s ease-in-out, stroke 0.2s ease-in-out, stroke-width 0.2s ease-in-out;
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
  touch-action: none;
}
</style>
