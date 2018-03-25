import { isHuman } from '../services/players'
import { ThemeStones, StoneNames } from '../../plugins/lib'

export default {
  computed: {
    sessionHuman: function () {
      return { 1: isHuman(this.$store.state.player[1]), 2: isHuman(this.$store.state.player[2]) }
    },
    sessionWaiting () {
      return !this.sessionHuman[this.game.player] && !this.game.winner
    },
    sessionCanSwitch () {
      return !this.game.moves.length && this.sessionHuman[1] && !this.sessionHuman[2]
    },
    sessionHotSeat () {
      return this.sessionHuman[1] && this.sessionHuman[2]
    },
    sessionSolo () {
      return this.sessionHuman[1] !== this.sessionHuman[2]
    },
    sessionRobotMatch () {
      return !this.sessionHuman[1] && !this.sessionHuman[2]
    },
    sessionOther () {
      return 3 - this.game.player
    },
    sessionHumanWin () {
      return humanResult(this.sessionHuman, this.winner, true)
    },
    sessionHumanLost () {
      return humanResult(false)
    },
    sessionNames () {
      return StoneNames[ThemeStones[this.game.constructor.theme]]
    },
    sessionSoloDraw () {
      return this.sessionSolo && this.game.winner === -1
    },
    sessionTimedOut () {
      return this.sessionHotSeat && this.game.expired
    }
  }
}

function humanResult (sessionHuman, winner, win) {
  const h1 = sessionHuman[1]
  const h2 = sessionHuman[2]
  const r1 = win ? 1 : 2
  const r2 = win ? 2 : 1

  return (h1 && !h2 && winner === r1) || (!h1 && h2 && winner === r2)
}
