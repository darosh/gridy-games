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
      const h1 = this.sessionHuman[1]
      const h2 = this.sessionHuman[2]

      return (h1 && !h2 && this.game.winner === 1) || (!h1 && h2 && this.game.winner === 2)
    },
    sessionHumanLost () {
      const h1 = this.sessionHuman[1]
      const h2 = this.sessionHuman[2]

      return (h1 && !h2 && this.game.winner === 2) || (!h1 && h2 && this.game.winner === 1)
    },
    sessionNames () {
      return StoneNames[ThemeStones[this.game.constructor.theme]]
    }
  }
}
