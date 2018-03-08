<template>
  <polyline :points="points" />
</template>

<script>
import { scaleThreshold, scaleLinear } from "d3-scale";
// import { autoPlay, Tween, Easing } from "es6-tween";
// import  from "@tweenjs/tween.js";
import TWEEN from "@tweenjs/tween.js";
const { Tween, Easing } = TWEEN;

// autoPlay(true);

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
    },
    duration: {
      type: Number,
      default: 1200
    },
    size: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      points: "",
      fixed: []
    };
  },
  watch: {
    size: function() {
      this.line(this.tiles);
    },
    tiles: {
      immediate: true,
      handler: function(tiles) {
        this.line(tiles);
      }
    }
  },
  methods: {
    line(tiles) {
      const centers = tiles.map(t => this.center(t));
      let length = 0;
      let prev = null;

      const lengths = centers.map(t => {
        prev = prev || t;
        length += Math.pow(prev.x - t.x, 2) + Math.pow(prev.y - t.y, 2);
        prev = t;
        return length;
      });

      const scale = scaleThreshold()
        .range(centers)
        .domain(lengths);

      const entries = [];

      for (let i = 1; i < centers.length; i++) {
        entries.push([
          centers[i],
          scaleLinear()
            .range([centers[i - 1], centers[i]])
            .domain([lengths[i - 1], lengths[i]])
        ]);
      }

      const scales = new Map(entries);
      this.fixed = [centers[0]];

      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);

      new Tween({ value: 0 })
        .to({ value: length }, this.duration)
        // .on("update", ({value}) => {
        .onUpdate(({ value }) => {
          value = Math.abs(value);
          const to = scale(value);
          const part = scales.get(to);

          // if (!part) {
          //   console.warn(value, length, lengths);
          //   return;
          // }

          const index = centers.indexOf(to);

          while (this.fixed.length < index) {
            this.fixed.push(centers[this.fixed.length]);
          }

          const end = part(value);
          this.points =
            this.fixed.map(p => p.toString()).join(",") + `,${end.x},${end.y}`;
        })
        // .on('complete', () => {
        //   autoPlay(false)
        // })
        .easing(Easing.Quartic.InOut)
        .start();
    }
  }
};
</script>
