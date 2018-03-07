import {
  UctPlayer,
  UctCachedPlayer,
  AlphaBetaPlayer,
  RandomPlayer,
  MinimaxPlayer
} from '../lib'

const HUMAN = 'Human'

export const players = {
  [HUMAN]: () => false,
  'Default': (game) => game.player ? game.player() : new UctCachedPlayer(400),
  'Random': () => new RandomPlayer(),
  'Instant UCT': () => new UctPlayer(200),
  'Fast UCT': () => new UctPlayer(400),
  'Slow UCT': () => new UctPlayer(1600),
  'Instant Cached UCT': () => new UctCachedPlayer(200),
  'Fast Cached UCT': () => new UctCachedPlayer(400),
  'Slow Cached UCT': () => new UctCachedPlayer(1600),
  'Minimax 1': () => new MinimaxPlayer(1),
  'Minimax 2': () => new MinimaxPlayer(2),
  'Minimax 3': () => new MinimaxPlayer(3),
  'Minimax 4': () => new MinimaxPlayer(4),
  'Alpha Beta 1': () => new AlphaBetaPlayer(1),
  'Alpha Beta 2': () => new AlphaBetaPlayer(2),
  'Alpha Beta 3': () => new AlphaBetaPlayer(3),
  'Alpha Beta 4': () => new AlphaBetaPlayer(4),
  'Alpha Beta 5': () => new AlphaBetaPlayer(5),
  'Alpha Beta 6': () => new AlphaBetaPlayer(6),
  'Alpha Beta 7': () => new AlphaBetaPlayer(7)
}

export function defaultPlayers () {
  return {
    1: HUMAN,
    2: 'Default'
  }
}

export function isHuman (name) {
  return name === HUMAN
}
