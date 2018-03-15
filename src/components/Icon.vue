<template>
  <svg
    :class="theme"
    :width="size"
    :height="size"
    :viewBox="box">
    <rect
      v-if="type === 'Rectangular'"
      width="20"
      height="20"
      x="2.5"
      y="2.5"
      class="tile"/>
    <polygon
      v-else-if="type === 'Hexagonal'"
      points="10,0 5,8.66 -5,8.66 -10,0 -5,-8.66 5,-8.66"
      transform="translate(12.5,12.5)"
      class="tile"/>
    <circle
      v-else-if="type === 'Radial'"
      r="10"
      cx="12.5"
      cy="12.5"
      class="tile"/>
  </svg>
</template>

<script>
import {theme} from '../style/theme'

export default {
  props: {
    game: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 24
    },
    box: {
      type: String,
      default: '0 0 24 24'
    }
  },
  computed: {
    theme: function () {
      return theme(this.game.constructor)
    }
  }
}
</script>
