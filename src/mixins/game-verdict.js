export default {
  computed: {
    verdictIcon () {
      return this.game.winner ? (this.game.winner > 0 ? 1 : -1) : null
    },
    verdictAnimation () {
      if (this.game.winner === -1) {
        return 'shift'
      } else if (this.sessionHumanWin) {
        return 'jump'
      } else {
        return 'shake'
      }
    },
    verdict () {
      if (this.sessionHumanWin) {
        return 'You won!'
      } else if (this.sessionHumanLost) {
        return 'You lost'
      } else if (this.sessionSoloDraw) {
        return `It's draw`
      } else if (this.sessionTimedOut) {
        return `Time out, ${this.sessionNames[this.game.winner - 1]} won!`
      } else if (this.game.winner > 0) {
        return `${this.sessionNames[this.game.winner - 1]} won!`
      } else if (this.game.winner === -1) {
        return `It's draw`
      }
    }
  }
}
