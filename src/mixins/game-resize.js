import { Shared } from '../services/shared'
import { Constants } from '../services/constants'

const {
  AXE_X,
  AXE_Y,
  MINIMAL_GAME_BOARD,
  MOBILE_BREAKPOINT,
  RESIZE_REFRESH_DELAY,
  SQUARE_RATIO,
  DRAWER_WIDTH,
  ZERO_WIDTH,
  SHORT_BREAKPOINT,
  GAME_MARGIN_X,
  GAME_MARGIN_Y,
  GAME_MARGIN_Y_SHORT,
  GAME_FOOTER
} = Constants

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
      }, RESIZE_REFRESH_DELAY)
    },
    onResizeUpdated () {
      let bounds = this.game.grid.bounds()
      const innerWidth = window.innerWidth - ((Shared.drawer && (window.innerWidth >= MOBILE_BREAKPOINT)) ? DRAWER_WIDTH : ZERO_WIDTH)
      const innerHeight = window.innerHeight

      if (this.game.landscape) {
        this.vertical = false
      } else {
        const ratio = (bounds.maxX - bounds.minX) / (bounds.maxY - bounds.minY)
        this.vertical = ratio > SQUARE_RATIO && innerWidth < innerHeight
      }

      this.frame = getFrame(this.vertical, innerHeight, innerWidth, this.game.score ? GAME_FOOTER : 0)

      minimalFrame(this.frame)
    }
  }
}

function getFrame (vertical, innerHeight, innerWidth, footer) {
  if (vertical) {
    return [innerHeight - GAME_MARGIN_Y_SHORT - footer, innerWidth - GAME_MARGIN_X]
  } else if (innerHeight < SHORT_BREAKPOINT) {
    return [innerWidth - GAME_MARGIN_X, innerHeight - GAME_MARGIN_Y_SHORT - footer]
  } else {
    return [innerWidth - GAME_MARGIN_X, innerHeight - GAME_MARGIN_Y]
  }
}

function minimalFrame (frame) {
  frame[AXE_X] = Math.max(MINIMAL_GAME_BOARD, frame[AXE_X])
  frame[AXE_Y] = Math.max(MINIMAL_GAME_BOARD, frame[AXE_Y])
}
