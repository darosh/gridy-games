import { Shared } from '../services/shared'

let resizeTimer = null

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
      this.onResizeUpdated()

      if (resizeTimer) {
        clearTimeout(resizeTimer)
        resizeTimer = null
      }

      resizeTimer = setTimeout(() => {
        resizeTimer = null
        this.onResizeUpdated()
      }, 100)
    },
    onResizeUpdated () {
      let bounds = this.game.grid.bounds()
      const innerWidth = window.innerWidth - ((Shared.drawer && (window.innerWidth >= 1264)) ? 300 : 0)
      const innerHeight = window.innerHeight

      if (this.game.landscape) {
        this.vertical = false
      } else {
        const ratio = (bounds.maxX - bounds.minX) / (bounds.maxY - bounds.minY)
        this.vertical = ratio > 1 && innerWidth < innerHeight
      }

      this.frame = getFrame(this.vertical, innerHeight, innerWidth)

      minimalFrame(this.frame)
    }
  }
}

function getFrame (vertical, innerHeight, innerWidth) {
  if (vertical) {
    return [innerHeight - 64 - 16, innerWidth - 32]
  } else if (innerHeight < 800) {
    return [innerWidth - 32, innerHeight - 64 - 16]
  } else {
    return [innerWidth - 32, innerHeight - 64 * 2]
  }
}

function minimalFrame (frame) {
  frame[0] = Math.max(180, frame[0])
  frame[1] = Math.max(180, frame[1])
}
