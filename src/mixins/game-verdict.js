import { ThemeStones, StoneNames } from '../../plugins/lib'

export default {
  computed: {
    verdictIcon () {
      return this.game.winner ? (this.game.winner > 0 ? 1 : -1) : null
    },
    verdictAnimation () {
      const h1 = this.sessionHuman[1]
      const h2 = this.sessionHuman[2]

      if (this.game.winner === -1) {
        return 'shift'
      } else if ((h1 && !h2 && this.game.winner === 1) ||
      (!h1 && h2 && this.game.winner === 2)) {
        return 'jump'
      } else {
        return 'shake'
      }
    },
    verdict () {
      const h1 = this.sessionHuman[1]
      const h2 = this.sessionHuman[2]

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
      } else if (h1 && h2 && this.game.expired) {
        const names = StoneNames[ThemeStones[this.game.constructor.theme]]
        return `Time out, ${names[this.game.winner - 1]} won!`
      } else if (this.game.winner) {
        const names = StoneNames[ThemeStones[this.game.constructor.theme]]

        if (this.game.winner > 0) {
          return `${names[this.game.winner - 1]} won!`
        } else {
          return `It's draw`
        }
      } else {
        return ''
      }
    }
  }
}
