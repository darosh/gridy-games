<template>
  <svg
    :class="'divider-' + (value || playerDivider)"
    class="player-divider"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1">
    <line
      class="l1"
      x1="12"
      y1="5"
      x2="12"
      y2="19" />
    <line
      class="l2"
      x1="12"
      y1="5"
      x2="12"
      y2="19" />
  </svg>
</template>

<script>
import playerDivider from '../mixins/player-divider'

export default {
  mixins: [playerDivider],
  props: {
    value: { type: String, default: '' }
  }
}
</script>

<style scoped>
.l1, .l2 {
  stroke-width: 2;
  transition: all 0.2s ease-in-out;
  transform-origin: 50% 50%;
}

.divider-0 .l1 {
  transform: rotate(90deg) translate(3px, 0);
}

.divider-0 .l2 {
  transform: rotate(-90deg)  translate(3px, 0);
}

.divider-1 .l1 {
  transform: rotate(45deg) translate(4px, 2px);
}

.divider-1 .l2 {
  transform: rotate(-45deg)  translate(4px, -2px);
}
.divider-2 .l1 {
  transform: rotate(-45deg) translate(-4px, 2px);
}

.divider-2 .l2 {
  transform: rotate(45deg)  translate(-4px, -2px);
}

.theme--light .player-divider line {
  stroke: #848484;
}

.theme--dark .player-divider line {
  stroke: #fff;
}
</style>
