import { Shared } from '../services/shared'

export default {
  computed: {
    playerDivider () {
      if (Shared.game.moves.length && Shared.game.score) {
        return scoreStatus()
      } else {
        return -1
      }
    }
  }
}

function scoreStatus () {
  if (Shared.game.score[1] > Shared.game.score[2]) {
    return 1
  } else if (Shared.game.score[1] < Shared.game.score[2]) {
    return 2
  } else {
    return 0
  }
}
