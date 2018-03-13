import {
  scaleToFit
} from '../services/utils'

export default {
  data () {
    return {
      // game: null,
      translate: [],
      size: []
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
        this.game.grid.scale = Math.round(scaled)
        this.game.grid.scale -= this.game.grid.scale % 2
      } else {
        this.game.grid.scale = scaled
      }

      bounds = this.game.grid.bounds()
      this.size = [bounds.maxX - bounds.minX + this.margin, bounds.maxY - bounds.minY + this.margin]

      const w = Math.floor(bounds.maxX - bounds.minX) % 2 ? 0 : 0.5
      const h = Math.floor(bounds.maxY - bounds.minY) % 2 ? 0 : 0.5

      this.translate = [
        (this.size[0] - bounds.minX - bounds.maxX) / 2 + w,
        (this.size[1] - bounds.minY - bounds.maxY) / 2 + h
      ]

      // if (this.frame[0] < this.frame[1] && this.size[0] > this.size[1]) {
      //   this.size.reverse()
      // }
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
    }
  },
  computed: {
    vertices () {
      return this.game.grid.irregular ? false : this.game.grid
        .vertices(undefined, this.game.scale ? (2 * Math.round(this.game.scale * this.game.grid.scale / 2)) : this.game.grid.scale, 1)
        .map(p => p.x.toFixed(3) + ',' + p.y.toFixed(3))
        .join(' ')
    }
  },
  watch: {
    frame: {
      handler: function () { this.frameUpdate() },
      immediate: true
    }
  }
}
