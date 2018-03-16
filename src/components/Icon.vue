<template>
  <svg
    :class="theme"
    :width="size*1.2"
    :height="size"
    :viewBox="box"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1">
    <rect
      v-if="type === 'Rectangular'"
      width="19"
      height="19"
      x="2"
      y="2"
      class="tile"/>
    <polygon
      v-else-if="type === 'Hexagonal'"
      points="10.97,0 5.485,9.5 -5.485,9.5 -10.97,0 -5.485,-9.5 5.485,-9.5"
      transform="translate(11.5,11.5)"
      class="tile"/>
    <circle
      v-else-if="type === 'Radial'"
      r="9.5"
      cx="11.5"
      cy="11.5"
      class="tile"/>
    <polygon
      v-else-if="type === 'Triangular'"
      points="0,0 21.939,0 10.970,-19"
      transform="translate(0.501,21)"
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
      default: '-0.5 -0.5 24 24'
      // default: '1.5 1.5 20 20'
    }
  },
  computed: {
    theme: function () {
      return theme(this.game.constructor)
    }
  }
}
</script>
