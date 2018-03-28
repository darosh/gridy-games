export { Move } from './Move';
export { GameProxy } from './GameProxy';
export { TimedProxy } from './TimedProxy';
export { IGame } from './IGame';
export { IPLayer } from './IPlayer';

export * from './games';
export * from './players';

import * as games from './games';
// tslint:disable-next-line:variable-name
export const Games = games;

import * as players from './players';
// tslint:disable-next-line:variable-name
export const Players = players;

export { FIELDS, other, reset, stringify, table, undoFor, update } from './utils';
export * from './utils/actions';

export { Info } from './Info';
export { Theme, ThemeStones, Stones, StoneNames } from './Theme';
