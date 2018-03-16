export default {
  data () {
    return {
      vertical: window.innerWidth < window.innerHeight
    }
  },
  methods: {
    onResize () {
      let bounds = this.game.grid.bounds()

      if (this.game.landscape) {
        this.vertical = false
      } else {
        const ratio = (bounds.maxX - bounds.minX) / (bounds.maxY - bounds.minY)
        this.vertical = ratio > 1 && window.innerWidth < window.innerHeight
      }

      if (this.vertical) {
        this.frame = [window.innerHeight - 64 * 2 - 8, window.innerWidth - 40]
      } else {
        if (window.innerHeight < 800) {
          this.frame = [
            window.innerWidth - 40,
            window.innerHeight - 64 * 2 - 16
          ]
        } else {
          this.frame = [
            window.innerWidth - 64,
            window.innerHeight - 64 * 4 + 32
          ]
        }
      }

      this.frame[0] = Math.max(180, this.frame[0])
      this.frame[1] = Math.max(180, this.frame[1])
    }
  }
}
