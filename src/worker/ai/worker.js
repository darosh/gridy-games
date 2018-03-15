/* globals self */

import {
  Games,
  update,
  reset
} from '../../../plugins/lib'

import {
  players
} from '../../services/players'

let player
let game

self.onmessage = function (event) {
  if (event.data.player) {
    const Game = Games[event.data.game + 'Game']
    player = players[event.data.player](Game)
    game = new Game()
  } else {
    reset(game)
    update(game, event.data.game)
    let move = player.select(game)
    move.move = game.moveToString(move.move)
    move.id = event.data.id
    self.postMessage(JSON.stringify(move))
  }
}
