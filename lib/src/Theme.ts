export enum Theme {
  Checkers,
  CheckersHex,
  Gomoku,
  Hex,
  Mills,
  Plastic,
  Qirkat,
  Reversi,
  TacTickle
}

export enum Stones {
  BlackWhite,
  OrangeBlue,
  RedYellow
}

// tslint:disable-next-line:variable-name
export const ThemeStones = {
  [Theme.Checkers]: Stones.BlackWhite,
  [Theme.CheckersHex]: Stones.BlackWhite,
  [Theme.Gomoku]: Stones.BlackWhite,
  [Theme.Hex]: Stones.OrangeBlue,
  [Theme.Mills]: Stones.BlackWhite,
  [Theme.Plastic]: Stones.RedYellow,
  [Theme.Qirkat]: Stones.BlackWhite,
  [Theme.Reversi]: Stones.BlackWhite,
  [Theme.TacTickle]: Stones.OrangeBlue
};

// tslint:disable-next-line:variable-name
export const StoneNames = {
  [Stones.BlackWhite]: ['Black', 'White'],
  [Stones.OrangeBlue]: ['Orange', 'Blue'],
  [Stones.RedYellow]: ['Red', 'Yellow']
};
