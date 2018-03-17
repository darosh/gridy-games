import { Shared } from '../services/shared'

export default {
  data () {
    return {
      Shared,
      vertical: window.innerWidth < window.innerHeight
    }
  },
  watch: {
    'Shared.drawer': function () { this.onResize() }
  },
  methods: {
    onResize () {
      let bounds = this.game.grid.bounds()
      const innerWidth = window.innerWidth - ((Shared.drawer && (window.innerWidth >= 1264)) ? 300 : 0)
      const innerHeight = window.innerHeight

      if (this.game.landscape) {
        this.vertical = false
      } else {
        const ratio = (bounds.maxX - bounds.minX) / (bounds.maxY - bounds.minY)
        this.vertical = ratio > 1 && innerWidth < innerHeight
      }

      if (this.vertical) {
        this.frame = [innerHeight - 64 - 16, innerWidth - 32]
      } else {
        if (innerHeight < 800) {
          this.frame = [innerWidth - 32, innerHeight - 64 - 16]
        } else {
          this.frame = [innerWidth - 32, innerHeight - 64 * 2]
        }
      }

      this.frame[0] = Math.max(180, this.frame[0])
      this.frame[1] = Math.max(180, this.frame[1])
    }
  }
}
