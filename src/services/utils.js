import { Games } from '../../plugins/lib'

export function scaleToFit (iw, ih, fw, fh) {
  return Math.min(fw / iw, fh / ih)
}

export function gameData (game, data, original = true) {
  if ((game[data] === undefined) && original && game.original) {
    return gameOriginalData(game, data, original)
  } else {
    return game[data]
  }
}

function gameOriginalData (game, data, original) {
  if (Games[game.original][data] === undefined) {
    return gameData(Games[game.original], data, original)
  }

  return Games[game.original][data]
}
