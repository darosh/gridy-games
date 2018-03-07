<template>
  <polyline :points="points" />
</template>

<script>
export default {
  props: {
    tiles: {
      type: Array,
      required: true
    },
    center: {
      type: Function,
      required: true
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      points: ""
    };
  },
  watch: {
    tiles: {
      immediate: true,
      handler: function(value) {
        setTimeout(() => {
          this.points = this.line(value);
        }, this.delay)
      }
    }
  },
  methods: {
    line(tiles) {
      return tiles.map(t => this.center(t).toString()).join(",");
    }
  }
};
</script>
