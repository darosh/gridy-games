<template>
  <svg
    :width="size[0]"
    :height="size[1]"
    :class="{[theme]: true}"
    class="d-inline-block">
    <rect
      :x="margin/2 + 0.5"
      :y="margin/2 + 0.5"
      :width="size[0] - margin"
      :height="size[1] - margin"
      class="preview" />
    <g
      :transform="'translate('+ translate +')'"
      class="preview">
      <line
        v-for="(l, k) in lines"
        :x1="center(l[0]).x"
        :y1="center(l[0]).y"
        :x2="center(l[1]).x"
        :y2="center(l[1]).y"
        :key="k"
        :class="l[2] ? 'line-' + l[2] : ''" />
      <g
        v-for="t in game.grid.tiles"
        :key="t.key"
        :transform="'translate(' + center(t) + ')'">
        <path
          v-if="game.grid.irregular"
          :d="path(t)"
          :class="{['angle-' + Math.abs(game.grid.orientation * game.grid.angle)] : true, ['value-' + (t.data || 0)]: true, possible: t.highlighted, odd: t.odd, animate: true}"
          :transform="'rotate(' + (game.grid.orientation * game.grid.angle) + ')'"
          class="tile" />
        <polygon
          v-else
          :points="vertices || irregularVertices(t)"
          :class="{['angle-' + Math.abs(game.grid.orientation * game.grid.angle)] : true, ['value-' + (t.data || 0)]: true, possible: t.highlighted, odd: t.odd, animate: true}"
          :transform="'rotate(' + (game.grid.orientation * game.grid.angle) + ')'"
          class="tile" />
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
        :key="'c' + t.key"
        :transform="'translate(' + center(t) + ')'">
        <circle
          v-if="t.data"
          :class="'token-' + t.data"
          :r="game.grid.radius * game.grid.scale - 2"
          cx="0"
          cy="0" />
      </g>
    </g>
  </svg>
</template>

<script>
import { Games, initActions } from '../lib'
import game from '../mixins/game'
import { theme } from '../style/theme'

export default {
  mixins: [game],
  props: {
    value: { type: String, required: true },
    frame: { type: Array, required: true },
    margin: { type: Number, default: 0 }
  },
  data () {
    const game = new Games[this.value]()
    initActions(game, game.possible())

    return {
      name: this.$route.params.id,
      lines: game.links ? game.links() : [],
      rulers: game.rulers ? game.rulers() : [],
      possible: {},
      game,
      theme: theme(Games[this.value])
    }
  },
  created () {
    this.frameUpdate()
  },
  methods: {
    center (tile) {
      return this.game.grid.center(tile)
    },
    undo () {
      this.game.undo()
      this.update()
    }
  }
}
</script>
