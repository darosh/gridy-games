<template>
  <svg
    :class="theme"
    width="24"
    height="24"
    class="preview d-block">
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
    }
  },
  computed: {
    theme: function () {
      return theme(this.game.constructor)
    }
  }
}
</script>
