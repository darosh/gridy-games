import { isHuman } from '../services/players'

export default {
  computed: {
    human: function () {
      return [undefined, isHuman(this.$store.state.player[1]), isHuman(this.$store.state.player[2])]
    },
    waiting () {
      return !this.human[this.game.player] && !this.game.winner
    },
    canSwitch () {
      return !this.game.moves.length && this.human[1] && !this.human[2]
    },
    hotSeat () {
      return this.human[1] && this.human[2]
    },
    robotMatch () {
      return !this.human[1] && !this.human[2]
    },
    other () {
      return 3 - this.game.player
    }
  }
}
