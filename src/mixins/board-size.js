import Vue from 'vue'
import { scaleToFit } from '../services/utils'

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // game: null,
      translate: [],
      size: [],
      rect: [],
      resizing: false
    }
  },
  methods: {
    frameUpdate () {
      if (!this.game || !this.frame || !this.margin) {
        return
      }

      this.game.grid.scale = 1

      let bounds = this.game.grid.bounds()
      let scaled = scaleToFit(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY, this.frame[0], this.frame[1])

      if (!this.game.grid.irregular && this.round) {
        this.game.grid.scale = Math.floor(scaled / 2) * 2
      } else {
        this.game.grid.scale = scaled
      }

      bounds = this.game.grid.bounds()

      this.rect = [bounds.maxX - bounds.minX + this.margin, bounds.maxY - bounds.minY + this.margin]

      if (!this.fixed) {
        this.size = this.rect
      } else {
        this.size = [bounds.maxX - bounds.minX + this.margin, this.frame[1] + this.margin]
      }

      this.translate = getTranslate(bounds, this.size)
    },
    path (tile) {
      return this.game.grid
        .path(tile)
    },
    irregularVertices (tile) {
      return this.game.grid
        .path(tile)
        .map(p => p.x.toFixed(3) + ',' + p.y.toFixed(3))
        .join(' ')
    },
    typedVertices (tile) {
      return this.game.grid
        .vertices(tile, undefined, this.game.grid.getTileType(tile))
        .map(p => p.x.toFixed(3) + ',' + p.y.toFixed(3))
        .join(' ')
    }
  },
  computed: {
    vertices () {
      return this.game.grid.irregular ? false : this.game.grid
        .vertices(undefined, this.game.scale ? (2 * Math.round(this.game.scale * this.game.grid.scale / 2)) : this.game.grid.scale, 1)
        .map(p => p.x.toFixed(3) + ',' + p.y.toFixed(3))
        .join(' ')
    },
    shift () {
      return (window.innerHeight - this.size[this.vertical ? 0 : 1]) / 2 - 64 + 10
    }
  },
  watch: {
    frame: {
      handler: function () {
        this.resizing = true
        this.frameUpdate()

        Vue.nextTick(() => {
          setTimeout(() => {
            this.resizing = false
          }, 200)
        })
      },
      immediate: true
    }
  }
}

function getTranslate (bounds, size) {
  const w = Math.floor(bounds.maxX - bounds.minX) % 2 ? 0 : 0.5
  const h = Math.floor(bounds.maxY - bounds.minY) % 2 ? 0 : 0.5

  return [
    ((size[0] - bounds.minX - bounds.maxX) / 2 + w).toFixed(3),
    ((size[1] - bounds.minY - bounds.maxY) / 2 + h).toFixed(3)
  ]
}
