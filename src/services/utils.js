import { Games } from '../lib'

export function scaleToFit (iw, ih, fw, fh) {
  return Math.min(fw / iw, fh / ih)
}

export function gameData (game, data, original = true) {
  if ((game[data] === undefined) && original && game.original) {
    return Games[game.original][data]
  } else {
    return game[data]
  }
}
