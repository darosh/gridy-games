import {
  isHuman
} from '../services/players'

export default {
  computed: {
    human: function () {
      return [undefined, isHuman(this.$store.state.player[1]), isHuman(this.$store.state.player[2])]
    },
    robotTurn () {
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
    verdict () {
      const h1 = this.human[1]
      const h2 = this.human[2]

      if (
        (h1 && !h2 && this.game.winner === 1) ||
        (!h1 && h2 && this.game.winner === 2)
      ) {
        return 'You won!'
      } else if (
        (h1 && !h2 && this.game.winner === 2) ||
        (!h1 && h2 && this.game.winner === 1)
      ) {
        return 'You lost'
      } else if (h1 !== h2 && this.game.winner === -1) {
        return `It's draw`
      } else if (h1 && h2 && this.expired) {
        return 'Time out'
      } else {
        return 'Game over!'
      }
    }
  }
}
