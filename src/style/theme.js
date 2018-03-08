const THEMES = [
  ['reversi', null, /Reversi/],
  ['tacticle', /Tac-tickle/],
  ['gomoku', /Gomoku|in-a-row/],
  ['plastic', /Connect Four/],
  ['hex-checkers', /Hex .* Checkers/],
  ['hex', /Hex|Tic Tac Toe|Circular Four/],
  ['checkers', /Checkers/],
  ['qirkat', null, /Misc/],
  ['mills', null, /Mills/]
]

export function theme (game) {
  if (game.theme) {
    return game.theme + '-theme'
  }

  for (const t of THEMES) {
    if ((t[1] && t[1].test(game.title)) || (t[2] && t[2].test(game.type))) {
      return t[0] + '-theme'
    }
  }
}
