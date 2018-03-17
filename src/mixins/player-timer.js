import { tickSound, failSound } from '../services/sound'

export default {
  data () {
    return {
      timer: -1,
      transition: 0
    }
  },
  watch: {
    'game.player': function () {
      this.updateTimer()
    },
    'game.pending': function () {
      this.updateTimer()
    },
    'game.counterSignal': function (value) {
      if (!this.$store.state.sound) {
        return
      }

      if (value > 0) {
        tickSound()
      } else if (value === 0) {
        failSound()
      }
    }
  },
  methods: {
    updateTimer () {
      if (this.game.pending && this.value === this.game.player) {
        this.timer = -1
        this.transition = 0

        setTimeout(() => {
          this.timer = 0
          this.transition = this.game.limit
        }, 50)
      } else {
        this.timer = -1
        this.transition = 0
      }
    }
  }
}
