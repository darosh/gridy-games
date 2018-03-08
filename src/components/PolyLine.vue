<template>
  <polyline :points="points" />
</template>

<script>
import { scaleThreshold, scaleLinear } from 'd3-scale'
import TWEEN from '@tweenjs/tween.js'
import { start, stop } from '../services/tween'

const { Tween, Easing } = TWEEN

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
  data () {
    return {
      points: '',
      fixed: [],
      pending: null
    }
  },
  watch: {
    size: function () {
      this.line(this.tiles)
    },
    tiles: {
      immediate: true,
      handler: function (tiles) {
        this.line(tiles)
      }
    }
  },
  methods: {
    destroyed () {
      this.stop()
    },
    stop () {
      if (this.pending) {
        this.pending.stop()
      }
    },
    line (tiles) {
      this.points = ''
      const centers = tiles.map(t => this.center(t))
      let length = 0
      let prev = null

      const lengths = centers.map(t => {
        prev = prev || t
        length += Math.sqrt(Math.pow(prev.x - t.x, 2) + Math.pow(prev.y - t.y, 2))
        prev = t
        return length
      })

      const scale = scaleThreshold()
        .range(centers)
        .domain(lengths)

      const entries = []

      for (let i = 1; i < centers.length; i++) {
        entries.push([
          centers[i],
          scaleLinear()
            .range([centers[i - 1], centers[i]])
            .domain([lengths[i - 1], lengths[i]])
        ])
      }

      const scales = new Map(entries)
      this.fixed = [centers[0]]

      start()

      this.pending = new Tween({ value: 0 })
        .to({ value: length }, this.duration)
        .delay(this.delay)
        .onUpdate(({ value }) => {
          const to = scale(value)
          const part = scales.get(to)
          const index = centers.indexOf(to)

          while (this.fixed.length < index) {
            this.fixed.push(centers[this.fixed.length])
          }

          const end = part(value)
          this.points =
            this.fixed.map(p => p.toString()).join(',') + `,${end.x},${end.y}`
        })
        .onStop(stop)
        .onComplete(stop)
        .easing(Easing.Quintic.InOut)
        .start()
    }
  }
}
</script>
