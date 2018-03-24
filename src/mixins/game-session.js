import { isHuman } from '../services/players'

export default {
  computed: {
    sessionHuman: function () {
      return [undefined, isHuman(this.$store.state.player[1]), isHuman(this.$store.state.player[2])]
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
    sessionRobotMatch () {
      return !this.sessionHuman[1] && !this.sessionHuman[2]
    },
    sessionOther () {
      return 3 - this.game.player
    }
  }
}
